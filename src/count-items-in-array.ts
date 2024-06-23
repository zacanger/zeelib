type R = Record<string, number>

/**
 * Get an object of items in an array with count
 * @example
 * countItemsInArray([ 1, 1, 2, 3, 4 ]) // => { '1': 2, '2': 1, '3': 1, '4': 1 }
 */

/** @deprecated will be removed in v13 */
export const countItemsInArray = <T>(arr: T[]): R =>
  arr.reduce((a: R, c: any): R => {
    if (a[c.toString()]) {
      a[c.toString()]++
    } else {
      a[c.toString()] = 1
    }
    return a
  }, {})
