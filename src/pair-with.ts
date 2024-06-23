/**
 * Returns an array made by calling
 * f on a and b.
 * @example
 * pairWith(increment, 1, 1) // => [ 2, 2 ]
 */

/** @deprecated will be removed in v13 */
export const pairWith = <T> (
  f: (x: T) => T,
  a: T,
  b: T,
): T[] => [ f(a), f(b) ]
