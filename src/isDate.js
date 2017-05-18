// @flow

import objectToString from './objectToString'

/**
 * Returns true if the value is a date
 */

const isDate = (v: any): bool =>
  objectToString.call(v) === '[object Date]'

export default isDate
