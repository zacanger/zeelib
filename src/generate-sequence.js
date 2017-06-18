// @flow

/**
 * Generates an array of the length of the first param,
 * filled with the second param, calling the second param
 * if it's a function
 * @example
 * generateSequence(4, 1) // => [ 4, 4, 4, 4 ]
 * generateSequence(4, (a) => a + 1) // => [ 5, 5, 5, 5 ]
 */

const generateSequence = (n: number, p: any): any[] =>
  Array(n).fill().map((_, i) =>
    typeof p === 'function' ? p(n, i) : p)

export default generateSequence
