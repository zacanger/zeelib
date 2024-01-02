import { objectToString } from './object-to-string'

/**
 * Returns true if the value is a date
 * @example
 * isDate(new Date()) // => true
 */

export const isDate = (v: any): boolean =>
  objectToString(v) === '[object Date]'
