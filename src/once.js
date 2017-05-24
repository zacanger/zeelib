// @flow

/**
 *
 * only calls fn once; subsequent calls just return first val
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
