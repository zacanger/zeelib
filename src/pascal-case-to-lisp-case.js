// @flow

/**
 * PascalCase to lisp-case
 * @example
 * pascalCaseToLispCase('FooBar') // => 'foo-bar'
 */

const pascalCaseToLispCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, (m) =>
    '-' + m.toLowerCase()).toLowerCase()

export default pascalCaseToLispCase
