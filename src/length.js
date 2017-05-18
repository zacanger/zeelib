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

const length = (v: any): number => {
  if (isArray(v) || isString(v)) return v.length
  if (isMap(v) || isSet(v)) return v.size
  if (isObject(v)) return v.keys.length
  return 0
}

export default length
