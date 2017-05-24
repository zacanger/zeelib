// @flow

/**
 * lisp-case to snake_case
 */

const lispCaseToSnakeCase = (str: string): string =>
  str.replace(/-/g, '_')

export default lispCaseToSnakeCase
