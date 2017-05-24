// @flow

import isString from './isString'
import isArrayLike from './isArrayLike'
import isObject from './isObject'
import isNullOrUndefined from './isNullOrUndefined'

/**
 * Returns true if the value is empty
 */

const isEmpty = (v: any): bool => {
  if (isNullOrUndefined(v)) return true
  if (isString(v)) return /^\s*$/.test(v)
  // /^[ \t\s]*$/.test(v)
  if (isArrayLike(v)) return !v.length
  if (isObject(v)) return !Object.keys(v).length
  return !v
}

export default isEmpty
