// @flow

/**
 * Generates an array of the length of the first param,
 * filled with the second param, calling the second param
 * if it's a function
 * @example
 * replicate(3, 10) // => [ 10, 10, 10 ]
 * replicate(4, (a) => a + 1) // => [ 5, 5, 5, 5 ]
 */

const replicate = <A>(n: number, p: A | (n: number, i: number) => A): A[] =>
  Array(n).fill().map((_, i) =>
    typeof p === 'function' ? p(n, i) : p)

export default replicate
