/**
 * From lisp-case to camelCase
 * @example
 * lispCaseToCamelCase('foo-bar') // => 'fooBar'
 */

const lispCaseToCamelCase = (str: string): string =>
  str.toLowerCase().replace(/-[a-z]/g, (match) =>
    match.slice(1).toUpperCase())

export default lispCaseToCamelCase
