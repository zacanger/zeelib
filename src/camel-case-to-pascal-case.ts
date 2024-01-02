/**
 * Takes a camelCase string and returns one in PascalCase
 * @example
 * camelCaseToPascalCase('fooBar') // => 'FooBar'
 */

export const camelCaseToPascalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
