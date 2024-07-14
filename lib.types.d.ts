import type { OpenAPISpecV3Extensions } from './openapi.types';

/**
 * An interface that represents a property in the OpenAPI Specification v3.
 * @see {@link https://swagger.io/specification/#schema-object}
 */
export interface OpenAPISpecV3Property extends OpenAPISpecV3Extensions {
  /**
   * The reference to another schema in the components object.
   */
  $ref?: string;
  /**
   * An array of schemas that can be used to validate the property.
   */
  anyOf?: OpenAPISpecV3Property[];
  /**
   * A description of the property.
   */
  description: string;
  /**
   * An array of possible values for the property.
   */
  enum?: string[];
  /**
   * The format of the property.
   */
  format?: OpenAPISpecV3PropertyFormat;
  /**
   * The schema of items in the property, if the property is an array.
   */
  items?: OpenAPISpecV3Property;
  /**
   * The maximum length of the property.
   */
  maxLength?: number;
  /**
   * Whether the property can be null.
   */
  nullable?: boolean;
  /**
   * A map of properties, if the property is an object.
   */
  properties?: Record<string, OpenAPISpecV3Property>;
  /**
   * The type of the property.
   */
  type: OpenAPISpecV3PropertyType;
}

/**
 * The type of the property.
 * @see {@link https://swagger.io/specification/#data-types}
 */
export type OpenAPISpecV3PropertyType = 'string' | 'integer' | 'number' | 'boolean' | 'object' | 'array';

/**
 * The format of the property.
 * @see {@link https://swagger.io/specification/#data-types}
 */
export type OpenAPISpecV3PropertyFormat = 'unix-time' | 'decimal';