// @flow

import takeWhile from './take-while'

/**
 * Similar to `takeWhile`: returns a tuple
 * of all elements that pass predicate
 * and all elements that did not
 * @example
 * span(lessThanThree, [ 1, 2, 3, 4 ]) // => [ [ 1, 2 ], [ 3, 4 ] ]
 */

const span = <A>(
  pred: (A) => bool,
  arr: A[]
): [A[], A[]] => {
  const sat = takeWhile(pred, arr)
  return [ sat, arr.slice(sat.length) ]
}

export default span
