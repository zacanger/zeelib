/**
 * Like Haskell's `take`
 * @example
 * take(2, [ 1, 2, 3 ]) // => [ 1, 2 ]
 */

export const take = <A>(n: number, a: A[]): A[] =>
  n > a.length ? a : a.slice(0, n)
