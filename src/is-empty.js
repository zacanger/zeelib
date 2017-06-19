// @flow

import isString from './is-string'
import isArrayLike from './is-array-like'
import isObject from './is-object'
import isNullOrUndefined from './is-null-or-undefined'

/**
 * Returns true if the value is empty
 * @example
 * isEmpty('') // => true
 * isEmpty({}) // => true
 * isEmpty([]) // => true
 * isEmpty(null) // => true
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
