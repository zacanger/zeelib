/**
 * Uniq an array
 * @example
 * uniq([ 1, 1, 2, 3 ]) // => [ 1, 2, 3 ]
 */

export const uniq = <A>(arr: A[]): A[] =>
  [ ...new Set(arr) ]
