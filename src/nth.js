// @flow

/**
 * Returns nth element of array
 * @example
 * nth(2, [ 1, 2 3 ]) // => 3
 */

const nth = <T> (n: number, arr: T[]): T =>
  arr[n]

export default nth
