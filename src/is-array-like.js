// @flow

import isNumber from './is-number'

/**
 * Returns true if the passed value is array-like
 */

const isArrayLike = (v: any): bool =>
  v && isNumber(v.length)

export default isArrayLike
