// @flow

/**
 * Takes a val and returns fn that takes a val and returns true
 * if the two are not the same
 * @example
 * not(1)(1) // => false
 * not(1)(2) // => true
 */

const not = <A, B> (a: A) =>
  (b: B): bool =>
    a !== b

export default not
