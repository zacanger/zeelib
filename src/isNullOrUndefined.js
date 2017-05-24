// @flow

import isNull from './isNull'
import isUndefined from './isUndefined'

/**
 * Returns true if the value is null or undefined
 */

const isNullOrUndefined = (v: any): bool =>
  isNull(v) || isUndefined(v)

export default isNullOrUndefined
