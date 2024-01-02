/**
 * Returns true if the value is an integer
 * @example
 * isInteger(2) // => true
 * isInteger(1.1) // => false
 */

export const isInteger = (v: any): boolean =>
  typeof v === 'number' && !Number.isNaN(v) && v % 1 === 0
