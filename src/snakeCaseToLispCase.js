// @flow

/**
 * snake_case to lisp-case
 */

const snakeCaseToLispCase = (str: string): string =>
  str.replace(/_/g, '-')

export default snakeCaseToLispCase
