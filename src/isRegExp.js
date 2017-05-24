// @flow

import objectToString from './objectToString'

/**
 * Returns true if value is a RegExp
 */

const isRegExp = (v: any): bool =>
  objectToString.call(v) === '[object RegExp]'

export default isRegExp
