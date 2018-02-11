// @flow

import isNumber from './is-number'

/**
 * Returns true if the passed value is array-like
 * @example
 * isArrayLike({}) // => false
 * isArrayLike([ 1, 2 ]) // => true
 */

const isArrayLike = (v: mixed): bool => {
  if (v && v.length != null) {
    return isNumber(v.length)
  }
  return false
}

export default isArrayLike
