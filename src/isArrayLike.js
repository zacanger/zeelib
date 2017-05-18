// @flow

import isNumber from './isNumber'

/**
 * Returns true if the passed value is array-like
 */

const isArrayLike = (v: any): bool =>
  v && isNumber(v.length)

export default isArrayLike
