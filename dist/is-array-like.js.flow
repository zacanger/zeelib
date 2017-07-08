// @flow

import isNumber from './is-number'

/**
 * Returns true if the passed value is array-like
 * @example
 * isArrayLike({}) // => false
 * isArrayLike([ 1, 2 ]) // => true
 */

const isArrayLike = (v: any): bool =>
  v && isNumber(v.length)

export default isArrayLike
