import objectToString from './object-to-string'

/**
 * Returns true if value is a RegExp
 * @example
 * isRegExp(/a/) // => true
 */

const isRegExp = (v: any): boolean =>
  objectToString(v) === '[object RegExp]'

export default isRegExp
