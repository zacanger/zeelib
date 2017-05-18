// @flow

/**
 * lisp-case to snake_case
 */

const lispCaseToSnakeCase = (s: string): string =>
  s.replace(/-/g, '_')

export default lispCaseToSnakeCase
