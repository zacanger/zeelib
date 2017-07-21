// @flow

import isArray from './is-array'
import isMap from './is-map'
import isObject from './is-object'
import isSet from './is-set'
import isString from './is-string'
import isFunction from './is-function'

/**
 * Get length of element
 * Works for array, object, string, set, and map
 * @example
 * length('foo') // => 3
 * length([ 1, 2 ]) => 2
 */

const length = (val: any): number => {
  if (isArray(val) || isString(val) || isFunction(val)) return val.length
  if (isMap(val) || isSet(val)) return val.size
  if (isObject(val)) return Object.keys(val).length
  return 0
}

export default length
