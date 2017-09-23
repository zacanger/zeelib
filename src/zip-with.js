// @flow

import zip from './zip'

/**
 * Takes a function and two lists
 *
 * Returns a list made by calling the function
 * on the elements of each list in the same position
 * @example
 * zipWith(increment, [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2 ]
 */

const zipWith = (
  fn: (any) => any,
  ...xs: any[]
): any[] =>
  zip(...xs).map((a) => a.reduce(fn))

export default zipWith
