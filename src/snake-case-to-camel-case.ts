/**
 * snake_case to camelCase
 * @example
 * snakeCaseToCamelCase('foo_bar') // => 'fooBar'
 */

export const snakeCaseToCamelCase = (str: string): string =>
  str.replace(/(_\w)/g, (match) =>
    match[1].toUpperCase())
