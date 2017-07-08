// @flow

import pair from './pair'

/**
 * Takes a function and two lists
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @example
 * zipWith(increment, [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2 ]
 */

const zipWith = (
  fn: (any) => any,
  xs: any[],
  ys: any[]
): any[] =>
  xs.map((x, i) => fn.apply(fn, pair(x, ys[i])))

export default zipWith
