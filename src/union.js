// @flow

/**
 * Get the union of two arrays
 * @example
 * union([ 1, 2, 3 ], [ 2, 3, 4 ]) // => [ 1, 2, 3, 4 ]
 */

const union = (xs: any[], ys: any[]): any[] =>
  [...new Set([ ...xs, ...ys ])]

export default union
