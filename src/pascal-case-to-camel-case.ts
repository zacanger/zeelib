/**
 * PascalCase to camelCase
 * @example
 * pascalCaseToCamelCase('FooBar') // => 'fooBar'
 */

export const pascalCaseToCamelCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1)
