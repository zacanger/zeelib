// @flow

import isNan from './is-nan'

/**
 * Returns true if the value is a number and is not NaN
 * @example
 * isNumber(2) // => true
 * isNumber(NaN) // => false
 */

const isNumber = (v: mixed): bool =>
  typeof v === 'number' && !isNan(v)

export default isNumber
