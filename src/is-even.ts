/**
 * Returns true if the number is even
 * @example
 * isEven(2) // => true
 */

export const isEven = (n: number): boolean =>
  (n & 1) === 0
