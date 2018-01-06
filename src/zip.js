// @flow

import pair from './pair'
import zipWith from './zip-with'

/**
 * Makes a list of tuples
 *
 * Each tuple is the elements of each passed array
 * at the same position
 * @example
 * zip([ 1, 2 ], [ 3, 4 ]) // => [ [ 1, 3 ], [ 2, 4 ] ]
 */

const zip = <A, B>(xs: A[], ys: B[]): [A, B][] =>
  zipWith(pair, xs, ys)

export default zip
