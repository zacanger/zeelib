// @flow

/**
 * Lex sort
 */

const lexSort = (a: string, b: string): number =>
  a === b
    ? 0
    : a > b
      ? 1
      : -1

export default lexSort
