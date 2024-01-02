/**
 * Returns true if the value is a boolean
 * @example
 * isBoolean(true) // => true
 */

export const isBoolean = (v: any): boolean =>
  typeof v === 'boolean'
