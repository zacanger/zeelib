/**
 * All elements except first
 * @example
 * tail([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
 */

export const tail = <T>(arr: T[]): T[] =>
  arr.slice(1)
