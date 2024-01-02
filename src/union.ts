import { uniq } from './uniq'

/**
 * Get the union of any amount of arrays
 * @example
 * union([ 1, 2, 3 ], [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
 */

export const union = <A>(...xs: A[][]): A[] =>
  uniq(([] as any[]).concat.apply([], xs))
