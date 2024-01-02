/**
 * PascalCase to snake_case
 * @example
 * pascalCaseToSnakeCase('FooBar') // => 'foo_bar'
 */

export const pascalCaseToSnakeCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, (m) =>
    '_' + m.toLowerCase()).toLowerCase()
