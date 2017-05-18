// @flow

/**
 * From lisp-case to camelCase
 */

const lispCaseToCamelCase = (str: string): string =>
  str.toLowerCase().replace(/-[a-z]/g, (match) =>
    match.slice(1).toUpperCase())

export default lispCaseToCamelCase
