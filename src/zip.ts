import { pair } from './pair'
import { zipWith } from './zip-with'

/**
 * Makes a list of tuples
 *
 * Each tuple is the elements of each passed array
 * at the same position
 * @example
 * zip([ 1, 2 ], [ 3, 4 ]) // => [ [ 1, 3 ], [ 2, 4 ] ]
 */

/** @deprecated will be removed in v13 */
export const zip = <A, B>(xs: A[], ys: B[]): Array<[A, B]> =>
  zipWith(pair, xs, ys)
