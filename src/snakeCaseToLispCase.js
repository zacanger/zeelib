// @flow

/**
 * snake_case to lisp-case
 */

const snakeCaseToLispCase = (s: string): string =>
  s.replace(/_/g, '-')

export default snakeCaseToLispCase
