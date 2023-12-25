import objectToString from './object-to-string'

/**
 * Returns true if value is a set
 * @example
 * isSet(new Set()) // => true
 */

const isSet = (v: any): boolean =>
  objectToString(v) === '[object Set]'

export default isSet
