// @flow

import isNan from './is-nan'

/**
 * Returns true if the value is a number and is not NaN
 */

const isNumber = (v: any): bool =>
  typeof v === 'number' && !isNan(v)

export default isNumber
