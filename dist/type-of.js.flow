// @flow

import isArray from './is-array'
import isDate from './is-date'
import isRegExp from './is-reg-exp'

/**
 * Enhanced `typeof`
 * @example
 * typeOf('a') // => 'string'
 * typeOf(new Date()) // => 'date'
 */

const typeOf = (a: any): string => {
  if (typeof a === 'object') {
    if (a === null) return 'null'
    if (a && a.nodeType === 1) return 'dom'
    if (isArray(a)) return 'array'
    if (isDate(a)) return 'date'
    if (isRegExp(a)) return 'regexp'
    return 'object'
  }
  return typeof a
}

export default typeOf
