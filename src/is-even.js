// @flow

/**
 * Returns true if the number is even
 * @example
 * isEven(2) // => true
 */

const isEven = (n: number): bool =>
  (n & 1) === 0

export default isEven
