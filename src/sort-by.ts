/**
 * Takes a sort fn and an array
 *
 * Returns a sorted array
 * @example
 * const list = [ { id: 1 }, { id: 3 }, { id: 2 } ]
 * sortBy(({ id }) => id, list) // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
 */

export const sortBy = <A>(f: (a: A) => number, xs: A[]): A[] =>
  xs.slice().sort((a, b) => f(a) - f(b))
