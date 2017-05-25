// @flow

/**
 * Takes a camelCase string and returns one in PascalCase
 */

const camelCaseToPascalCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default camelCaseToPascalCase
