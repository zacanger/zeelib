// @flow

/**
 * Takes a camelCase string and returns one in PascalCase
 * @example
 * camelCaseToPascalCase('fooBar') // => 'FooBar'
 */

const camelCaseToPascalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default camelCaseToPascalCase
