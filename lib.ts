import type { FileSink } from 'bun';
import type { OpenAPISpecV3Schema } from './openapi.types';
import type { OpenAPISpecV3Property } from './lib.types';

const componentMap = new Map<string, OpenAPISpecV3Schema>();
const subComponentMap = new Map<string, OpenAPISpecV3Schema>();
const enumMap = new Map<string, string[]>();

export const exitWithUsage = () => {
  console.log(`
Usage: openapi-to-amplify <inputFilePath> -o <outputFilePath> [options]

Options:
  --overwrite                  Overwrite the output file if it already exists
  -i, --include <type[,type]>  Only include specific types in the output (comma separated string)
  -h, --help                   Display this usage information
  `);
  process.exit(0);
};

export const snakeToPascal = (str: string) =>
  str
    .replace(/\./g, '')
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

export const isSupported = (fileType: string, supported: string[] = []) => supported.includes(fileType.split(';')[0]);

export const sorted = <T extends Map<string, any>>(map: T) => new Map([...map.entries()].sort()) as T;

export const parseRef = (ref: OpenAPISpecV3Property['$ref']) => {
  const component = ref?.split('/').pop()!;
  return `ref('${snakeToPascal(component)}')`;
};

export const parseStringProp = (name: string, prop: OpenAPISpecV3Property, componentName: string) => {
  if (!!prop.enum) {
    if (name === 'object') return `enum([${prop.enum.map(e => `'${e}'`)}])`;
    const enumName = `${componentName}${snakeToPascal(name)}Enum`;
    if (!enumMap.has(enumName)) enumMap.set(enumName, prop.enum);
    return `ref('${enumName}')`;
  }
  return 'string()';
}

export const parseIntegerProp = ({ format }: OpenAPISpecV3Property) => format === 'unix-time' ? 'timestamp()' : 'integer()';

export const parseArrayProp = (name: string, { items }: OpenAPISpecV3Property, componentName: string) => `${parsePropType(name, items!, componentName)}.array()`;

export const parsePropType = (name: string, prop: OpenAPISpecV3Property, componentName: string): string => {
  if ('$ref' in prop) return parseRef(prop.$ref);
  else switch (prop.type) {
    case 'string': return parseStringProp(name, prop, componentName);
    case 'integer': return parseIntegerProp(prop);
    case 'number': return `float()`;
    case 'boolean': return 'boolean()';
    case 'array': return parseArrayProp(name, prop, componentName);
    default: return `json()`;
  }
}

export const parseAnyOf = (name: string, anyOf: NonNullable<OpenAPISpecV3Property['anyOf']>, componentName: string) => {
  if (anyOf.length > 1) return 'json()';
  return parsePropType(name, anyOf[0], componentName);
};

export const parseSubSchema = (prop: OpenAPISpecV3Schema, componentName: string) => {
  let definition = 'customType({\n';
  const propList = Object.entries<OpenAPISpecV3Property>(prop.properties!);
  if (!propList.length) return 'json()';
  propList.forEach(([ name, body ]) => {
    definition += `\t\t\t${name}: `;
    const isRequired = prop.required?.includes(name);
    const appsyncProp = toAppsyncProp(name, body, isRequired, componentName);
    definition += `${appsyncProp},\n`;
  });
  return `${definition}\t\t})`;
};

export const toAppsyncProp = (name: string, prop: OpenAPISpecV3Property | OpenAPISpecV3Schema, isRequired: boolean, componentName: string) => {
  let definition = 'a.';
  if (!!prop.$ref) definition += parseRef(prop.$ref);
  else if (!!prop.anyOf) definition += parseAnyOf(name, prop.anyOf, componentName);
  else if (!!prop.properties) definition += parseSubSchema(prop as OpenAPISpecV3Schema, componentName);
  else definition += parsePropType(name, prop as OpenAPISpecV3Property, componentName);
  if (isRequired && !definition.includes('a.enum')) definition += '.required()';
  return definition;
};

export const mapComponent = (writer: FileSink, value: OpenAPISpecV3Schema, key: string) => {
  if (!value.properties) return;
  const componentName = snakeToPascal(key);
  const propList = Object.entries<OpenAPISpecV3Property>(value.properties);
  if (!propList.length) writer.write(`\t${componentName}: a.json(),\n`);
  else {
    writer.write(`\t${componentName}: a.customType({\n`);
    propList.forEach(([ name, body ]) => {
      writer.write(`\t\t${name}: `);
      const isRequired = value.required?.includes(name);
      const prop = toAppsyncProp(name, body, isRequired, componentName);
      writer.write(`${prop},\n`);
    });
    writer.write('\t}),\n');
  }
};

export const mapComponents = async (writer: FileSink) => {
  writer.write('const components = {\n');
  await writer.flush();
  sorted(componentMap).forEach((value, key) => void mapComponent(writer, value, key));
  writer.write('};\n\n');
  await writer.flush();
};

export const mapSubComponents = async (writer: FileSink) => {
  writer.write('const subComponents = {\n');
  await writer.flush();
  sorted(subComponentMap).forEach((value, key) => void mapComponent(writer, value, key));
  writer.write('};\n\n');
  await writer.flush();
};

export const mapEnums = async (writer: FileSink) => {
  writer.write('const enums = {\n');
  await writer.flush();
  sorted(enumMap).forEach((value, key) => void writer.write(`\t${key}: a.enum([${value.map(v => `'${v}'`)}]),\n`));
  writer.write('};\n\n');
  await writer.flush();
};

export const addToMap = (component: string, cMap: Map<string, OpenAPISpecV3Schema>) => {
  if (!subComponentMap.has(component) && !componentMap.has(component)) subComponentMap.set(component, cMap.get(component)!);
  setRefs(cMap.get(component)!, cMap);
};

export const setRefs = (value: OpenAPISpecV3Schema, cMap: Map<string, OpenAPISpecV3Schema>) => {
  Object.values<OpenAPISpecV3Property>(value.properties).forEach(prop => {
    if (prop.items && '$ref' in prop.items) {
      const component = prop.items.$ref?.split('/').pop()!;
      addToMap(component, cMap);
    }
    if (prop.anyOf && prop.anyOf.length === 1 && '$ref' in prop.anyOf[0]) {
      const component = prop.anyOf[0].$ref?.split('/').pop()!;
      addToMap(component, cMap);
    }
    if (prop.properties) setRefs(prop, cMap);
    if (!('$ref' in prop)) return;
    const component = prop.$ref?.split('/').pop()!;
    addToMap(component, cMap);
  });
};

export const setComponents = async (cMap: Map<string, OpenAPISpecV3Schema>, includeList?: string[]) => {
  cMap.forEach((value, key) => {
    if (!!includeList && !includeList.includes(key)) return;
    componentMap.set(key, value);
  });
  if (!!includeList?.length) componentMap.forEach(value => setRefs(value, cMap));
};

export const toAmplifyDataDef = async <T extends Map<string, OpenAPISpecV3Schema>>(
  writer: FileSink,
  cMap: T,
  includeList?: string[]
) => {
  try {
    writer.write('import { a } from \'@aws-amplify/backend\';\n\n');
    await writer.flush();
    await setComponents(cMap, includeList);
    await mapComponents(writer);
    if (!!subComponentMap.size) await mapSubComponents(writer);
    if (!!enumMap.size) await mapEnums(writer);
    writer.write(`export default ${!!enumMap.size || !!subComponentMap.size
      ? `{\n\t...components,\n${!!subComponentMap.size ? '\t...subComponents,\n' : ''}${!!enumMap.size ? '\t...enums,\n' : ''}}`
      : 'components'};
    `);
  } finally {
    await writer.end();
  }
};
