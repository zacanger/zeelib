// @flow

import objectToString from './object-to-string'

/**
 * Returns true if the value is an object
 */

const isObject = (v: any): bool =>
  objectToString(v) === '[object Object]'

export default isObject
