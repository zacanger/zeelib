/**
 * Returns true if the number is odd
 * @example
 * isOdd(1) // => true
 */

export const isOdd = (n: number): boolean =>
  (n & 1) !== 0
