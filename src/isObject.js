// @flow

import objectToString from './objectToString'

/**
 * Returns true if the value is an object
 */

const isObject = (v: any): bool =>
  objectToString.call(v) === '[object Object]'

export default isObject
