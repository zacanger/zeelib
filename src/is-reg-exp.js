// @flow

import objectToString from './object-to-string'

/**
 * Returns true if value is a RegExp
 */

const isRegExp = (v: any): bool =>
  objectToString(v) === '[object RegExp]'

export default isRegExp
