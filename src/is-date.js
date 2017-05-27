// @flow

import objectToString from './object-to-string'

/**
 * Returns true if the value is a date
 */

const isDate = (v: any): bool =>
  objectToString(v) === '[object Date]'

export default isDate
