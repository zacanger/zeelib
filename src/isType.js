/* eslint-disable no-multi-spaces */

// @flow

import isArray from './isArray'

// usage:
// isType(el, type)
// isType(1, 'number')
// isType(thing.something, 'array')
function isType (a: any, t: string): bool {
  const type = String(t).toLowerCase()

  if ((type === 'null' && a === null)             ||
      (type === typeof a)                         || // eslint-disable-line
      (type === 'object' && a === Object(a))      ||
      (type === 'array' && isArray && isArray(a)) ||
      Object.prototype.toString.call(a).slice(8, -1).toLowerCase() === type) {
    return true
  }
  return false
}

export default isType
