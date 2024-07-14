import { parseArgs } from 'util';
import { normalize } from 'path';
import { unlinkSync } from 'fs';
import { isSupported, exitWithUsage, toAmplifyDataDef } from './lib';
import type { OpenAPISpecV3 } from './openapi.types';

try {
  const {
    positionals: [,, input],
    values: { output, overwrite, include, help },
  } = parseArgs({
    args: Bun.argv,
    options: {
      output: { type: 'string', short: 'o' },
      overwrite: { type: 'boolean', default: false },
      include: { type: 'string', short: 'i' },
      help: { type: 'boolean', short: 'h' }
    },
    allowPositionals: true
  });
  if (help || Bun.argv.length === 2) exitWithUsage();
  if (!input) throw 'Error: No input file specified';
  if (!output) throw 'Error: No output file specified';
  let outputFile = Bun.file(normalize(output));
  if (!!outputFile.size) {
    if (!overwrite) throw 'Error: Output file already has content, use the \'--overwrite\' flag to overwrite it';
    unlinkSync(output);
    outputFile = Bun.file(normalize(output));
  }
  if (!isSupported(outputFile.type, ['text/javascript'])) throw 'Error: Only output files of type \'text/javascript\' (.js|.ts|.jsx|.tsx) are supported';
  const inputFile = Bun.file(normalize(input));
  if (!isSupported(inputFile.type, ['application/json', 'text/yaml'])) throw 'Error: Only input files of type \'application/json\' (.json) or \'text/yaml\' (.yaml|.yml) are supported';
  const apiSpec: OpenAPISpecV3 = inputFile.type === 'text/yaml'
    ? (await import('yaml')).parse(await inputFile.text())
    : await inputFile.json();
  const schemas = Object.entries(apiSpec.components?.schemas || {});
  const components = new Map(schemas);
  const writer = outputFile.writer();
  await toAmplifyDataDef(writer, components, include?.split(','));
  process.exit(0);
} catch (e) {
  console.error(e);
  process.exit(1);
}
