/**
 * Returns true if number is a power of two
 * @example
 * isPow2(16) // => true
 */

/** @deprecated will be removed in v13 */
export const isPow2 = (n: number): boolean =>
  1 << (n.toString(2).length - 1) === n
