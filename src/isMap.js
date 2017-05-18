// @flow

import objectToString from './objectToString'

/**
 * Returns true if value is a map
 */

const isMap = (v: any): bool =>
  objectToString.call(v) === '[object Map]'

export default isMap
