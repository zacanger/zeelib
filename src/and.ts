/**
 * Returns false if any in input array is false
 * @example
 * and([ 1, 2, 3 ]) // => true
 * and([ 1, 2, 3, false ]) // => false
 */

export const and = <T>(a: T[]): boolean =>
  a.every((e) => e !== false)
