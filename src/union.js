// @flow

import uniq from './uniq'

/**
 * Get the union of any amount of arrays
 * @example
 * union([ 1, 2, 3 ], [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
 */

const union = <A> (...xs: Array<A[]>): A[] =>
  uniq([].concat.apply([], xs))

export default union
