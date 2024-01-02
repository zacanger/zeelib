/**
 * Returns true if first param is greater than or equal to second param
 * @example
 * gte(2, 2) // => true
 * gte(2, 1) // => true
 * gte(2, 3) // => false
 */

export const gte = (a: number, b: number): boolean =>
  a >= b
