/**
 * Takes a camelCase string and returns one in lisp-case
 * @example
 * camelCaseToLispCase('fooBar') // => 'foo-bar'
 */

export const camelCaseToLispCase = (str: string): string =>
  str.replace(/[A-Z]/g, (match) =>
    '-' + match.toLowerCase()).toLowerCase()
