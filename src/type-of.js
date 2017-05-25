// @flow

import isArray from './is-array'
import isDate from './is-date'

/**
 * Enhanced `typeof`
 */

const typeOf = (a: any): string => {
  if (typeof a === 'object') {
    if (a === null) return 'null'
    if (a && a.nodeType === 1) return 'dom'
    if (isArray(a)) return 'array'
    if (isDate(a)) return 'date'
    return 'object'
  }
  return typeof a
}

export default typeOf
