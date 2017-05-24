// @flow

import objectToString from './objectToString'

/**
 * Returns true if value is a set
 */

const isSet = (v: any): bool =>
  objectToString.call(v) === '[object Set]'

export default isSet
