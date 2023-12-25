/**
 * Returns true if the number is a float
 * @example
 * isFloat(2) // => false
 * isFloat(2.2) // => true
 */

const isFloat = (n: number): boolean =>
  (n | 0) !== n

export default isFloat
