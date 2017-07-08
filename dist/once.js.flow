// @flow

/**
 * Only calls fn once; subsequent calls just return first val
 * @example
 * const o = once(id)
 * o(1) // => 1
 * o() // => 1
 * o(2) // => 1
 */

const once = (fn: any): any => {
  let returnValue
  return (...args: any): any => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
  }
}

export default once
