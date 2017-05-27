// @flow

/**
 * Generates an array of the length of the first param,
 * filled with the second param, calling the second param
 * if it's a function
 */

const generateSequence = (n: number, p: any): any[] =>
  Array(n).fill().map((_, i) =>
    typeof p === 'function' ? p(n, i) : p)

export default generateSequence
