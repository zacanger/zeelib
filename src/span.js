// @flow

import takeWhile from './takeWhile'

/**
 * Similar to `takeWhile`: returns a tuple
 * of all elements that pass predicate
 * and all elements that did not
 */

const span = (
  pred: () => bool,
  arr: any[]
): any[] => {
  const sat = takeWhile(pred, arr)
  return [ sat, arr.slice(sat.length) ]
}

export default span
