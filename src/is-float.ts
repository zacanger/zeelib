/**
 * Returns true if the number is a float
 * @example
 * isFloat(2) // => false
 * isFloat(2.2) // => true
 */

export const isFloat = (n: number): boolean =>
  (n | 0) !== n
