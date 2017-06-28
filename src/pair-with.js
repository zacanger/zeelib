// @flow

/**
 * Returns an array made by calling
 * f on a and b.
 * @example
 * pairWith(increment, 1, 1) // => [ 2, 2 ]
 */

const pairWith = (f: () => any, a: any, b: any): any[] =>
  [ f(a), f(b) ]

export default pairWith
