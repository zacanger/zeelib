// @flow

import objectToString from './objectToString'

/**
 * Returns true if the passed value is an array
 */

const isArray = Array.isArray || function (v: any): bool {
  return objectToString.call(v) === '[object Array]'
}

export default isArray
