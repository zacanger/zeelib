/**
 * snake_case to lisp-case
 * @example
 * snakeCaseToLispCase('foo_bar') // => 'foo-bar'
 */

export const snakeCaseToLispCase = (str: string): string =>
  str.replace(/_/g, '-')
