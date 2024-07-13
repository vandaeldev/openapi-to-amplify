/**
 * Extensions for OpenAPI Specification v3.
 * @see {@link https://swagger.io/specification/#specification-extensions}
 */
export interface OpenAPISpecV3Extensions {
  [extension: `x-${string}`]: any;
}

/**
 * Root object of the OpenAPI document.
 * @see {@link https://swagger.io/specification/#openapi-object}
 */
export interface OpenAPISpecV3 extends OpenAPISpecV3Extensions {
  /**
   * Metadata about the API.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  info: OpenAPISpecV3Info;
  /**
   * The version of the OpenAPI document.
   * @see {@link https://swagger.io/specification/#openapi-object}
   */
  openapi: string;
  /**
   * An element to hold various schemas.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  components?: OpenAPISpecV3Components;
  /**
   * Available paths and operations for the API.
   * @see {@link https://swagger.io/specification/#paths-object}
   */
  paths?: OpenAPISpecV3Paths;
  /**
   * Information about external documentation.
   * @see {@link https://swagger.io/specification/#external-documentation-object}
   */
  externalDocs?: OpenAPISpecV3ExternalDocs;
  /**
   * The default value for the `$schema` keyword within schemas.
   * @see {@link https://swagger.io/specification/#openapi-object}
   */
  jsonSchemaDialect?: string;
  /**
   * A declaration of which security mechanisms can be used.
   * @see {@link https://swagger.io/specification/#security-requirement-object}
   */
  security?: OpenAPISpecV3SecurityRequirement[];
  /**
   * An array of Server Objects, providing connectivity information to a target server.
   * @see {@link https://swagger.io/specification/#server-object}
   */
  servers?: OpenAPISpecV3Server[];
  /**
   * A list of tags used by the specification.
   * @see {@link https://swagger.io/specification/#tag-object}
   */
  tags?: OpenAPISpecV3Tag[];
  /**
   * The incoming webhooks that MAY be received as part of this API.
   * @see {@link https://swagger.io/specification/#openapi-object}
   */
  webhooks?: Record<string, OpenAPISpecV3PathItem | OpenAPISpecV3Reference>;
}

/**
 * Holds various schemas for the document.
 * @see {@link https://swagger.io/specification/#components-object}
 */
export interface OpenAPISpecV3Components extends OpenAPISpecV3Extensions {
  /**
   * An object to hold reusable callback definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  callbacks?: OpenAPISpecV3Callbacks;
  /**
   * An object to hold reusable examples.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  examples?: OpenAPISpecV3Examples;
  /**
   * An object to hold reusable header definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  headers?: OpenAPISpecV3Headers;
  /**
   * An object to hold reusable link definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  links?: OpenAPISpecV3Links;
  /**
   * An object to hold reusable parameter definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  parameters?: OpenAPISpecV3Parameters;
  /**
   * An object to hold reusable path item definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  pathItems?: Record<string, OpenAPISpecV3PathItem | OpenAPISpecV3Reference>;
  /**
   * An object to hold reusable request body definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  requestBodies?: Record<
    string,
    OpenAPISpecV3RequestBody | OpenAPISpecV3Reference
  >;
  /**
   * An object to hold reusable response definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  responses?: OpenAPISpecV3Responses;
  /**
   * An object to hold reusable schema definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  schemas?: Record<string, OpenAPISpecV3Schema | OpenAPISpecV3Reference>;
  /**
   * An object to hold reusable security scheme definitions.
   * @see {@link https://swagger.io/specification/#components-object}
   */
  securitySchemes?: Record<
    string,
    OpenAPISpecV3SecurityScheme | OpenAPISpecV3Reference
  >;
}

/**
 * Provides metadata about the API.
 * @see {@link https://swagger.io/specification/#info-object}
 */
export interface OpenAPISpecV3Info extends OpenAPISpecV3Extensions {
  /**
   * The title of the API.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  title: string;
  /**
   * A short summary of the API.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  summary?: string;
  /**
   * A description of the API.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  description?: string;
  /**
   * A URL to the Terms of Service for the API.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  termsOfService?: string;
  /**
   * The contact information for the exposed API.
   * @see {@link https://swagger.io/specification/#contact-object}
   */
  contact?: OpenAPISpecV3Contact;
  /**
   * The license information for the exposed API.
   * @see {@link https://swagger.io/specification/#license-object}
   */
  license?: OpenAPISpecV3License;
  /**
   * The version of the OpenAPI document.
   * @see {@link https://swagger.io/specification/#info-object}
   */
  version: string;
}

/**
 * Contact information for the exposed API.
 * @see {@link https://swagger.io/specification/#contact-object}
 */
export interface OpenAPISpecV3Contact extends OpenAPISpecV3Extensions {
  /**
   * The identifying name of the contact person/organization.
   * @see {@link https://swagger.io/specification/#contact-object}
   */
  name?: string;
  /**
   * The URL pointing to the contact information.
   * @see {@link https://swagger.io/specification/#contact-object}
   */
  url?: string;
  /**
   * The email address of the contact person/organization.
   * @see {@link https://swagger.io/specification/#contact-object}
   */
  email?: string;
}

/**
 * License information for the exposed API.
 * @see {@link https://swagger.io/specification/#license-object}
 */
export interface OpenAPISpecV3License extends OpenAPISpecV3Extensions {
  /**
   * The license name used for the API.
   * @see {@link https://swagger.io/specification/#license-object}
   */
  name: string;
  /**
   * A URL to the license used for the API.
   * @see {@link https://swagger.io/specification/#license-object}
   */
  url?: string;
}

/**
 * Additional external documentation.
 * @see {@link https://swagger.io/specification/#external-documentation-object}
 */
export interface OpenAPISpecV3ExternalDocs extends OpenAPISpecV3Extensions {
  /**
   * A description of the target documentation.
   * @see {@link https://swagger.io/specification/#external-documentation-object}
   */
  description?: string;
  /**
   * The URL for the target documentation.
   * @see {@link https://swagger.io/specification/#external-documentation-object}
   */
  url: string;
}

/**
 * Holds the relative paths to the individual endpoints.
 * @see {@link https://swagger.io/specification/#paths-object}
 */
export interface OpenAPISpecV3Paths extends OpenAPISpecV3Extensions {
  [path: `/${string}`]: OpenAPISpecV3PathItem;
}

/**
 * Describes the operations available on a single path.
 * @see {@link https://swagger.io/specification/#path-item-object}
 */
export interface OpenAPISpecV3PathItem extends OpenAPISpecV3Extensions {
  /**
   * Allows for a referenced definition of this path item.
   * @see {@link https://swagger.io/specification/#path-item-object}
   */
  $ref?: string;
  /**
   * A definition of a DELETE operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  delete?: OpenAPISpecV3Operation;
  /**
   * An optional description for the path item.
   * @see {@link https://swagger.io/specification/#path-item-object}
   */
  description?: string;
  /**
   * A definition of a GET operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  get?: OpenAPISpecV3Operation;
  /**
   * A definition of a HEAD operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  head?: OpenAPISpecV3Operation;
  /**
   * A definition of an OPTIONS operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  options?: OpenAPISpecV3Operation;
  /**
   * A list of parameters that are applicable for all the operations described under this path.
   * @see {@link https://swagger.io/specification/#path-item-object}
   */
  parameters?: OpenAPISpecV3Parameters;
  /**
   * A definition of a PATCH operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  patch?: OpenAPISpecV3Operation;
  /**
   * A definition of a POST operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  post?: OpenAPISpecV3Operation;
  /**
   * A definition of a PUT operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  put?: OpenAPISpecV3Operation;
  /**
   * An alternative server array to service all operations in this path.
   * @see {@link https://swagger.io/specification/#path-item-object}
   */
  servers?: OpenAPISpecV3Server[];
  /**
   * A short summary of what the path item represents.
   * @see {@link https://swagger.io/specification/#path-item-object}
   */
  summary?: string;
  /**
   * A definition of a TRACE operation on this path.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  trace?: OpenAPISpecV3Operation;
}

/**
 * Describes a single API operation on a path.
 * @see {@link https://swagger.io/specification/#operation-object}
 */
export interface OpenAPISpecV3Operation extends OpenAPISpecV3Extensions {
  /**
   * A map of possible out-of band callbacks related to the parent operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  callbacks?: OpenAPISpecV3Callbacks;
  /**
   * Declares this operation to be deprecated.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  deprecated?: boolean;
  /**
   * A short description of what the operation does.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  description?: string;
  /**
   * Additional external documentation for this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  externalDocs?: OpenAPISpecV3ExternalDocs;
  /**
   * Unique string used to identify the operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  operationId?: string;
  /**
   * A list of parameters that are applicable for this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  parameters?: (OpenAPISpecV3Parameter | OpenAPISpecV3Reference)[];
  /**
   * The request body applicable for this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  requestBody?: OpenAPISpecV3RequestBody | OpenAPISpecV3Reference;
  /**
   * REQUIRED. The list of possible responses as they are returned from executing this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  responses: OpenAPISpecV3Responses;
  /**
   * A declaration of which security mechanisms can be used for this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  security?: OpenAPISpecV3SecurityRequirement[];
  /**
   * An alternative server array to service this operation.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  servers?: OpenAPISpecV3Server[];
  /**
   * A short summary of what the operation does.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  summary?: string;
  /**
   * A list of tags for API documentation control.
   * @see {@link https://swagger.io/specification/#operation-object}
   */
  tags?: string[];
}

/**
 * A map of possible out-of band callbacks related to the parent operation.
 * @see {@link https://swagger.io/specification/#callback-object}
 */
export type OpenAPISpecV3Callbacks = Record<string, OpenAPISpecV3Callback | OpenAPISpecV3Reference>;

/**
 * Describes a single callback.
 * @see {@link https://swagger.io/specification/#callback-object}
 */
export interface OpenAPISpecV3Callback extends OpenAPISpecV3Extensions {
  [expression: string]: OpenAPISpecV3PathItem | OpenAPISpecV3Reference;
}

/**
 * A map of example definitions.
 * @see {@link https://swagger.io/specification/#example-object}
 */
export type OpenAPISpecV3Examples = Record<string, OpenAPISpecV3Example | OpenAPISpecV3Reference>;

/**
 * Represents an example.
 * @see {@link https://swagger.io/specification/#example-object}
 */
export interface OpenAPISpecV3Example extends OpenAPISpecV3Extensions {
  /**
   * A short description of the example.
   * @see {@link https://swagger.io/specification/#example-object}
   */
  description?: string;
  /**
   * A URL that points to the literal example.
   * @see {@link https://swagger.io/specification/#example-object}
   */
  externalValue?: string;
  /**
   * A short summary of the example.
   * @see {@link https://swagger.io/specification/#example-object}
   */
  summary?: string;
  /**
   * Embedded literal example.
   * @see {@link https://swagger.io/specification/#example-object}
   */
  value?: any;
}

/**
 * A map of header definitions.
 * @see {@link https://swagger.io/specification/#header-object}
 */
export type OpenAPISpecV3Headers = Record<string, OpenAPISpecV3Header | OpenAPISpecV3Reference>;

/**
 * Represents a header object.
 * @see {@link https://swagger.io/specification/#header-object}
 */
export type OpenAPISpecV3Header = Omit<OpenAPISpecV3Parameter, "name" | "in">;

/**
 * A map of possible links.
 * @see {@link https://swagger.io/specification/#link-object}
 */
export type OpenAPISpecV3Links = Record<string, OpenAPISpecV3Link | OpenAPISpecV3Reference>;

/**
 * Represents a link object.
 * @see {@link https://swagger.io/specification/#link-object}
 */
export interface OpenAPISpecV3Link extends OpenAPISpecV3Extensions {
  /**
   * A description of the link.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  description?: string;
  /**
   * The name of an existing, resolvable OAS operation, as defined with a unique operationId.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  operationId?: string;
  /**
   * A relative or absolute reference to an OAS operation.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  operationRef?: string;
  /**
   * A map representing parameters to pass to an operation.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  parameters?: Record<string, any>;
  /**
   * A request body to pass to the linked operation.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  requestBody?: any;
  /**
   * An alternative server array to service this operation.
   * @see {@link https://swagger.io/specification/#link-object}
   */
  server?: OpenAPISpecV3Server;
}

/**
 * A map of parameter definitions.
 * @see {@link https://swagger.io/specification/#parameter-object}
 */
export type OpenAPISpecV3Parameters = Record<string, OpenAPISpecV3Parameter | OpenAPISpecV3Reference>;

/**
 * Describes a single operation parameter.
 * @see {@link https://swagger.io/specification/#parameter-object}
 */
export interface OpenAPISpecV3Parameter extends OpenAPISpecV3Extensions {
  /**
   * Determines whether the parameter value can be empty.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  allowEmptyValue?: boolean;
  /**
   * Specifies that a parameter is allowed to contain reserved characters.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  allowReserved?: boolean;
  /**
   * The content of the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  content?: OpenAPISpecV3Content;
  /**
   * Declares this parameter to be deprecated.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  deprecated: boolean;
  /**
   * A brief description of the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  description?: string;
  /**
   * Example of the parameter's potential value.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  example?: any;
  /**
   * Examples of the parameter's potential values.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  examples?: OpenAPISpecV3Examples;
  /**
   * Specifies whether the parameter should be exploded or not.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  explode?: boolean;
  /**
   * The location of the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  in: string;
  /**
   * The name of the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  name: string;
  /**
   * Determines whether this parameter is mandatory.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  required?: boolean;
  /**
   * The schema defining the type used for the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  schema?: OpenAPISpecV3Schema;
  /**
   * The style of the parameter.
   * @see {@link https://swagger.io/specification/#parameter-object}
   */
  style?: string;
}

/**
 * Describes a single request body.
 * @see {@link https://swagger.io/specification/#request-body-object}
 */
export interface OpenAPISpecV3RequestBody extends OpenAPISpecV3Extensions {
  /**
   * The content of the request body.
   * @see {@link https://swagger.io/specification/#request-body-object}
   */
  content: OpenAPISpecV3Content;
  /**
   * A brief description of the request body.
   * @see {@link https://swagger.io/specification/#request-body-object}
   */
  description?: string;
  /**
   * Determines whether this request body is required.
   * @see {@link https://swagger.io/specification/#request-body-object}
   */
  required?: boolean;
}

/**
 * A map of media types and the media type definitions.
 * @see {@link https://swagger.io/specification/#media-type-object}
 */
export type OpenAPISpecV3Content = Record<string, OpenAPISpecV3MediaType>;

/**
 * Describes a single media type.
 * @see {@link https://swagger.io/specification/#media-type-object}
 */
export interface OpenAPISpecV3MediaType extends OpenAPISpecV3Extensions {
  /**
   * A map between a property name and its encoding information.
   * @see {@link https://swagger.io/specification/#media-type-object}
   */
  encoding?: Record<string, OpenAPISpecV3Encoding>;
  /**
   * Example of the media type.
   * @see {@link https://swagger.io/specification/#media-type-object}
   */
  example?: any;
  /**
   * Examples of the media type.
   * @see {@link https://swagger.io/specification/#media-type-object}
   */
  examples?: OpenAPISpecV3Examples;
  /**
   * The schema defining the type used for the media type.
   * @see {@link https://swagger.io/specification/#media-type-object}
   */
  schema?: OpenAPISpecV3Schema;
}

/**
 * A single encoding definition applied to a single schema property.
 * @see {@link https://swagger.io/specification/#encoding-object}
 */
export interface OpenAPISpecV3Encoding extends OpenAPISpecV3Extensions {
  /**
   * Specifies that a parameter is allowed to contain reserved characters.
   * @see {@link https://swagger.io/specification/#encoding-object}
   */
  allowReserved?: boolean;
  /**
   * The content type of the encoding.
   * @see {@link https://swagger.io/specification/#encoding-object}
   */
  contentType?: string;
  /**
   * Explodes the object to form a set of key/value pairs.
   * @see {@link https://swagger.io/specification/#encoding-object}
   */
  explode?: boolean;
  /**
   * A map of header definitions.
   * @see {@link https://swagger.io/specification/#encoding-object}
   */
  headers?: OpenAPISpecV3Headers;
  /**
   * Describes the style of the encoding.
   * @see {@link https://swagger.io/specification/#encoding-object}
   */
  style?: string;
}

/**
 * A map of responses for the operation.
 * @see {@link https://swagger.io/specification/#responses-object}
 */
export type OpenAPISpecV3Responses = Record<string, OpenAPISpecV3Response | OpenAPISpecV3Reference>;

/**
 * Describes a single response from an API Operation.
 * @see {@link https://swagger.io/specification/#response-object}
 */
export interface OpenAPISpecV3Response extends OpenAPISpecV3Extensions {
  /**
   * A short description of the response.
   * @see {@link https://swagger.io/specification/#response-object}
   */
  description: string;
  /**
   * A map containing descriptions of potential response payloads.
   * @see {@link https://swagger.io/specification/#response-object}
   */
  content?: OpenAPISpecV3Content;
  /**
   * A map of headers that are sent with the response.
   * @see {@link https://swagger.io/specification/#response-object}
   */
  headers?: OpenAPISpecV3Headers;
  /**
   * A map of operations links that can be followed from the response.
   * @see {@link https://swagger.io/specification/#response-object}
   */
  links?: OpenAPISpecV3Links;
}

/**
 * Lists the required security schemes to execute this operation.
 * @see {@link https://swagger.io/specification/#security-requirement-object}
 */
export interface OpenAPISpecV3SecurityRequirement {
  [name: string]: string[];
}

/**
 * Defines a security scheme that can be used by the operations.
 * @see {@link https://swagger.io/specification/#security-scheme-object}
 */
export interface OpenAPISpecV3SecurityScheme extends OpenAPISpecV3Extensions {
  /**
   * A short description for security scheme.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  description?: string;
  /**
   * The name of the header or query parameter to be used.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  name?: string;
  /**
   * The location of the API key.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  in?: string;
  /**
   * The name of the HTTP Authorization scheme to be used.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  scheme?: string;
  /**
   * A hint to the client to identify how the bearer token is formatted.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  bearerFormat?: string;
  /**
   * The type of the security scheme.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  type: string;
  /**
   * OpenId Connect URL to discover OAuth2 configuration values.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  openIdConnectUrl?: string;
  /**
   * Configuration information for OAuth flows.
   * @see {@link https://swagger.io/specification/#security-scheme-object}
   */
  flows?: OpenAPISpecV3OAuthFlows;
}

/**
 * Allows configuration of the supported OAuth Flows.
 * @see {@link https://swagger.io/specification/#oauth-flows-object}
 */
export interface OpenAPISpecV3OAuthFlows extends OpenAPISpecV3Extensions {
  /**
   * Configuration for the OAuth Authorization Code flow.
   * @see {@link https://swagger.io/specification/#oauth-flows-object}
   */
  authorizationCode?: OpenAPISpecV3OAuthFlow;
  /**
   * Configuration for the OAuth Client Credentials flow.
   * @see {@link https://swagger.io/specification/#oauth-flows-object}
   */
  clientCredentials?: OpenAPISpecV3OAuthFlow;
  /**
   * Configuration for the OAuth Implicit flow.
   * @see {@link https://swagger.io/specification/#oauth-flows-object}
   */
  implicit?: OpenAPISpecV3OAuthFlow;
  /**
   * Configuration for the OAuth Password flow.
   * @see {@link https://swagger.io/specification/#oauth-flows-object}
   */
  password?: OpenAPISpecV3OAuthFlow;
}

/**
 * Configuration details for a supported OAuth Flow.
 * @see {@link https://swagger.io/specification/#oauth-flow-object}
 */
export interface OpenAPISpecV3OAuthFlow extends OpenAPISpecV3Extensions {
  /**
   * The authorization URL to be used for this flow.
   * @see {@link https://swagger.io/specification/#oauth-flow-object}
   */
  authorizationUrl?: string;
  /**
   * The URL to be used for refreshing the token.
   * @see {@link https://swagger.io/specification/#oauth-flow-object}
   */
  refreshUrl?: string;
  /**
   * The available scopes for the OAuth2 security scheme.
   * @see {@link https://swagger.io/specification/#oauth-flow-object}
   */
  scopes?: Record<string, string>;
  /**
   * The token URL to be used for this flow.
   * @see {@link https://swagger.io/specification/#oauth-flow-object}
   */
  tokenUrl?: string;
}

/**
 * A JSON schema object.
 * @see {@link https://swagger.io/specification/#schema-object}
 */
export interface OpenAPISpecV3Schema extends OpenAPISpecV3Extensions {
  /**
   * Adds support for polymorphism.
   * @see {@link https://swagger.io/specification/#discriminator-object}
   */
  discriminator?: OpenAPISpecV3Discriminator;
  /**
   * Example of the schema's potential value.
   * @see {@link https://swagger.io/specification/#schema-object}
   */
  example?: any;
  /**
   * Additional external documentation for this schema.
   * @see {@link https://swagger.io/specification/#external-documentation-object}
   */
  externalDocs?: OpenAPISpecV3ExternalDocs;
  /**
   * XML representation format of this schema.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  xml?: OpenAPISpecV3XML;
  [x: string]: any;
}

/**
 * Adds support for polymorphism by specifying the discriminator field.
 * @see {@link https://swagger.io/specification/#discriminator-object}
 */
export interface OpenAPISpecV3Discriminator extends OpenAPISpecV3Extensions {
  /**
   * The name of the property in the payload that will hold the discriminator value.
   * @see {@link https://swagger.io/specification/#discriminator-object}
   */
  propertyName: string;
  /**
   * An object to hold mappings between payload values and schema names or references.
   * @see {@link https://swagger.io/specification/#discriminator-object}
   */
  mapping?: Record<string, string>;
}

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 * @see {@link https://swagger.io/specification/#xml-object}
 */
export interface OpenAPISpecV3XML extends OpenAPISpecV3Extensions {
  /**
   * Replaces the name of the element/attribute used for the described schema property.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  name?: string;
  /**
   * The URL of the namespace definition.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  namespace?: string;
  /**
   * The prefix to be used for the name.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  prefix?: string;
  /**
   * Declares whether the property definition translates to an attribute instead of an element.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  attribute?: boolean;
  /**
   * MAY be used only for an array definition.
   * @see {@link https://swagger.io/specification/#xml-object}
   */
  wrapped?: boolean;
}

/**
 * An object representing a Server.
 * @see {@link https://swagger.io/specification/#server-object}
 */
export interface OpenAPISpecV3Server extends OpenAPISpecV3Extensions {
  /**
   * A URL to the target host.
   * @see {@link https://swagger.io/specification/#server-object}
   */
  url: string;
  /**
   * An optional string describing the host designated by the URL.
   * @see {@link https://swagger.io/specification/#server-object}
   */
  description?: string;
  /**
   * A map between a variable name and its value.
   * @see {@link https://swagger.io/specification/#server-object}
   */
  variables?: Record<string, OpenAPISpecV3ServerVariable>;
}

/**
 * Represents a server variable for server URL template substitution.
 * @see {@link https://swagger.io/specification/#server-variable-object}
 */
export interface OpenAPISpecV3ServerVariable extends OpenAPISpecV3Extensions {
  /**
   * The default value to use for substitution.
   * @see {@link https://swagger.io/specification/#server-variable-object}
   */
  default: string;
  /**
   * An optional description for the server variable.
   * @see {@link https://swagger.io/specification/#server-variable-object}
   */
  description?: string;
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   * @see {@link https://swagger.io/specification/#server-variable-object}
   */
  enum?: [string, ...string[]];
}

/**
 * Adds metadata to a single tag that is used by the Operation Object.
 * @see {@link https://swagger.io/specification/#tag-object}
 */
export interface OpenAPISpecV3Tag extends OpenAPISpecV3Extensions {
  /**
   * The name of the tag.
   * @see {@link https://swagger.io/specification/#tag-object}
   */
  name: string;
  /**
   * A short description for the tag.
   * @see {@link https://swagger.io/specification/#tag-object}
   */
  description?: string;
  /**
   * Additional external documentation for this tag.
   * @see {@link https://swagger.io/specification/#external-documentation-object}
   */
  externalDocs?: OpenAPISpecV3ExternalDocs;
}

/**
 * A simple object to allow referencing other components in the specification.
 * @see {@link https://swagger.io/specification/#reference-object}
 */
export interface OpenAPISpecV3Reference {
  /**
   * The reference string.
   * @see {@link https://swagger.io/specification/#reference-object}
   */
  $ref: string;
  /**
   * An optional description for the reference.
   * @see {@link https://swagger.io/specification/#reference-object}
   */
  description?: string;
  /**
   * A short summary which by default SHOULD override that of the referenced component.
   * @see {@link https://swagger.io/specification/#reference-object}
   */
  summary?: string;
}
