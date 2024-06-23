/**
 * Double an array until it's n long
 * @example
 * doubleUntil(2)([ 'hi' ]) // => [ 'hi', 'hi' ]
 */

/** @deprecated will be removed in v13 */
export const doubleUntil = (minSize: number = 0) =>
  function double<T> (arr: T[]): T[] {
    if (arr.length >= minSize) {
      return arr
    }
    return double([ ...arr, ...arr ])
  }
