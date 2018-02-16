// @flow

import isDefined from './is-defined'

const iterateArray = <T>(arr: *[], fn: ((*, string) => T)): (T | void) => {
  for (let index: number = 0, len: number = arr.length; index < len; index++) {
    const exit = fn(arr[index], index.toString())
    if (isDefined(exit)) {
      return exit
    }
  }
}

const iterateObject = <T>(obj: {[string]: *}, fn: ((*, string) => T)): (T | void) => {
  for (let prop: string in obj) {
    if (obj.hasOwnProperty(prop)) {
      const exit = fn(obj[prop], prop)
      if (isDefined(exit)) {
        return exit
      }
    }
  }
}

/**
 * Takes an array or object
 * and a function, and runs the function
 * on each element
 * @param {array|object} list
 * @param {function} fn
 * @returns {any}
 * @example
 * each([ 'a', 'b', 'c' ], id) // => 'a'
 * each() // => void
 */

const each = <T>(list: (*[] | {[string]: *}), fn: ((?*, (number | string)) => T)) =>
  list && Array.isArray(list)
    ? iterateArray(list, fn)
    : iterateObject(list, fn)

export default each
