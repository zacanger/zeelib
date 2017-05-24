// @flow

import isArray from './isArray'
import isMap from './isMap'
import isObject from './isObject'
import isSet from './isSet'
import isString from './isString'

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
