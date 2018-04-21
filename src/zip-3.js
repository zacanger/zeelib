// @flow

import zipWith3 from './zip-with-3'

/**
 * Makes a list of tuples
 *
 * Each list is made of the elements of each list param's
 * elements at the same position
 * @example
 * zip3([ 1, 2 ], [ 3, 4 ], [ 5, 6 ]) // => [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
 */

const zip3 = <A, B, C>(xs: A[], ys: B[], zs: C[]): [A, B, C][] =>
  zipWith3((x, y, z) => [ x, y, z ], xs, ys, zs)

export default zip3
