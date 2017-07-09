// @flow

/**
 * Takes a sort fn and an array
 * Returns a sorted array
 * @example
 * const list = [ { id: 1 }, { id: 3 }, { id: 2 } ]
 * sortBy(({ id }) => id, list) // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
 */

const sortBy = <T> (
  f: (a: T) => any,
  xs: Array<T>
): Array<T> =>
  xs.sort((a, b) =>
    f(a) - f(b))

export default sortBy
