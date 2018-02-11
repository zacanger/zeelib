// @flow

import objectToString from './object-to-string'

/**
 * Returns true if the passed value is an array
 * @example
 * isArray([]) // => true
 */

const isArray = Array.isArray || ((v: mixed): bool =>
  objectToString(v) === '[object Array]')

export default isArray
