// @flow

import isArray from './is-array'
import isMap from './is-map'
import isObject from './is-object'
import isSet from './is-set'
import isString from './is-string'

/**
 * Get length of element
 * Works for array, object, string, set, and map
 */

const length = (val: any): number => {
  if (isArray(val) || isString(val)) return val.length
  if (isMap(val) || isSet(val)) return val.size
  if (isObject(val)) return val.keys.length
  return 0
}

export default length
