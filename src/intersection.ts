/**
 * Get the intersection of two arrays
 * @example
 * intersection([ 1, 2 ], []) // => []
 * intersection([ 1, 2, 3 ], [1, 2]) // => [ 1, 2 ]
 */

export const intersection = <T>(xs: T[], ys: T[]): T[] =>
  [ ...new Set(xs.filter((el) => ys.includes(el))) ]
