/**
 * From lisp-case to snake_case
 * @example
 * lispCaseToSnakeCase('foo-bar') // => 'foo_bar'
 */

export const lispCaseToSnakeCase = (str: string): string =>
  str.replace(/-/g, '_')
