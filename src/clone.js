// @flow

import isArray from './is-array'
import isDate from './is-date'
import isRegExp from './is-reg-exp'

/**
 * Clones anything
 * @param {any} obj
 * @returns {any}
 * @example
 * clone(1) // => 1
 */

const clone = <T: *> (obj: T): T => {
  // Number, String, Boolean, Function, null, undefined
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Date and RegExp
  if (isDate(obj) || isRegExp(obj)) {
    return new obj.constructor(obj)
  // Array and Object
  } else {
    // $FlowFixMe -- flow doesn't know you can do Object.create(some.prototype)
    let copy: T = isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj))
    for (let key: string in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = clone(obj[key])
      }
    }
    return copy
  }
}

export default clone
