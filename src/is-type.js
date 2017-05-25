/* eslint-disable no-multi-spaces */

import isArray from './is-array'

// usage:
// isType(el, type)
// isType(1, 'number')
// isType(thing.something, 'array')
function isType (a, t) {
  console.error('`isType` is deprecated. Please use `is` instead.')
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
