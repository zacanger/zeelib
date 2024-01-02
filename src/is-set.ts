import { objectToString } from './object-to-string'

/**
 * Returns true if value is a set
 * @example
 * isSet(new Set()) // => true
 */

export const isSet = (v: any): boolean =>
  objectToString(v) === '[object Set]'
