// @flow

/**
 * Returns false if any in input array is false
 * @example
 * and([ 1, 2, 3 ]) // => true
 * and([ 1, 2, 3, false ]) // => false
 */

const and = (a: mixed[]): bool =>
  a.every((e) => e !== false)

export default and
