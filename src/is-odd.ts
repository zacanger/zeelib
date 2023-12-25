/**
 * Returns true if the number is odd
 * @example
 * isOdd(1) // => true
 */

const isOdd = (n: number): boolean =>
  (n & 1) !== 0

export default isOdd
