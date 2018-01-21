// @flow

import isDefined from './is-defined'
import isArrayLike from './is-array-like'

const iterateArray = (arr, fn) => {
  for (let index = 0, len = arr.length; index < len; index++) {
    const exit = fn(arr[index], index)
    if (isDefined(exit)) {
      return exit
    }
  }
}

const iterateObject = (obj, fn) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const exit = fn(obj[prop], prop)
      if (isDefined(exit)) {
        return exit
      }
    }
  }
}

/**
 * Takes a an array or object
 * and a function, and runs the function
 * on each element
 * @param {array|object} list
 * @param {function} fn
 * @returns {any}
 * @example
 * each([ 'a', 'b', 'c' ], id) // => 'a'
 * each() // => undefined
 */

// $FlowFixMe
const each = (list, fn) =>
  isArrayLike(list)
    ? iterateArray(list, fn)
    : iterateObject(list, fn)

export default each
