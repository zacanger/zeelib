// @flow

import takeWhile from './takeWhile'

/**
 * Similar to `takeWhile`: returns a tuple
 * of all elements that pass predicate
 * and all elements that did not
 */

const span = (
  pred: () => bool,
  a: any[]
): any[] => {
  const sat = takeWhile(pred, a)
  return [ sat, a.slice(sat.length) ]
}

export default span
