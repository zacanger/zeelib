/**
 * Returns true if the value is a number and is not NaN
 * @example
 * isNumber(2) // => true
 * isNumber(NaN) // => false
 */

const isNumber = (v: any): boolean =>
  typeof v === 'number' && !Number.isNaN(v)

export default isNumber
