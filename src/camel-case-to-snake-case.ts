/**
 * Takes a camelCase string and returns one in snake_case
 * @example
 * camelCaseToSnakeCase('fooBar') // => 'foo_bar'
 */

export const camelCaseToSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (match) =>
    '_' + match.toLowerCase()).toLowerCase()
