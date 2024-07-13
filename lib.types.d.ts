import type { OpenAPISpecV3Extensions } from './openapi.types';

export interface OpenAPISpecV3Property extends OpenAPISpecV3Extensions {
  $ref?: string;
  anyOf?: OpenAPISpecV3Property[];
  description: string;
  enum?: string[];
  format?: OpenAPISpecV3PropertyFormat;
  items?: OpenAPISpecV3Property;
  maxLength?: number;
  nullable?: boolean;
  properties?: Record<string, OpenAPISpecV3Property>;
  type: OpenAPISpecV3PropertyType;
}

export type OpenAPISpecV3PropertyType = 'string' | 'integer' | 'number' | 'boolean' | 'object' | 'array';

export type OpenAPISpecV3PropertyFormat = 'unix-time' | 'decimal';