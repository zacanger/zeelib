// @flow

/**
 * `[].slice` util
 * @example
 * slice([ 1, 2, 3 ], 1, 2) // => [ 2 ]
 */

const slice = <A>(arr: A[], from: number, to?: number = -1): A[] =>
  arr.slice(from, to)

export default slice
