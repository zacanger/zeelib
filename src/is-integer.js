// @flow

import isNan from './is-nan'

/**
 * Returns true if the value is an integer
 * @example
 * isInteger(2) // => true
 * isInteger(1.1) // => false
 */

const isInteger = (v: mixed): bool =>
  typeof v === 'number' && !isNan(v) && v % 1 === 0

export default isInteger
