// @flow

import isArrayLike from './is-array-like'
import isDefined from './is-defined'

const iterateArray = <T>(arr: *[] | string, fn: ((*, string) => T)): (T | void) => {
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

const each = <T>(list: ?(*[] | {[string]: *} | string), fn: ?((?*, (number | string)) => T)) => {
  if (list && fn) {
    if (isArrayLike(list)) {
      // we need to have a more explicit way to narrow type here so that flow knows this will only ever be an array
      // $FlowFixMe
      return iterateArray(list, fn)
    } else {
      // same here
      // $FlowFixMe
      return iterateObject(list, fn)
    }
  } else return undefined
}

export default each
