import isSet from './is-set'
import isMap from './is-map'
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
    if (Array.isArray(a)) return 'array'
    if (isDate(a)) return 'date'
    if (isRegExp(a)) return 'regexp'
    if (isSet(a)) return 'set'
    if (isMap(a)) return 'map'
    return 'object'
  }
  return typeof a
}

export default typeOf
