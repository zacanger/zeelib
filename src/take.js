// @flow

/**
 * Like Haskell's `take`
 * @example
 * take(2, [ 1, 2, 3 ]) // => [ 1, 2 ]
 */

const take = (n: number, a: any[]): any[] =>
  n > a.length ? a : a.slice(0, n)

export default take
