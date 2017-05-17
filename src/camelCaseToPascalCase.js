// @flow

/**
 * Takes a camelCase string and returns one in PascalCase
 */

const camelCaseToPascalCase = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1)

export default camelCaseToPascalCase
