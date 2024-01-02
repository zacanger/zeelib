/**
 * From lisp-case to camelCase
 * @example
 * lispCaseToCamelCase('foo-bar') // => 'fooBar'
 */

export const lispCaseToCamelCase = (str: string): string =>
  str.toLowerCase().replace(/-[a-z]/g, (match) =>
    match.slice(1).toUpperCase())
