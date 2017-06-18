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

const clone = (obj) => {
  // Number, String, Boolean, Function, null, undefined
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Date and RegExp
  if (isDate(obj) || isRegExp(obj)) {
    return new obj.constructor(obj)
  // Array and Object
  } else {
    let copy = isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj))
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = this.clone(obj[key])
      }
    }
    return copy
  }
}

export default clone
