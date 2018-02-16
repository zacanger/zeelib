// @flow

/**
 * Returns an array made by calling
 * f on a and b.
 * @example
 * pairWith(increment, 1, 1) // => [ 2, 2 ]
 */

const pairWith = <T> (
  f: (T) => T,
  a: T,
  b: T
): T[] =>
  [ f(a), f(b) ]

export default pairWith
