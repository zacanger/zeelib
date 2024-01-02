/**
 * Get an object of items in an array with count
 * @example
 * countItemsInArray([ 1, 1, 2, 3, 4 ]) // => { '1': 2, '2': 1, '3': 1, '4': 1 }
 */

export const countItemsInArray = <T>(arr: T[]): Record<string, number> =>
  arr.reduce((a: Record<string, number>, c: any): Record<string, number> => {
    if (a[c.toString()]) {
      a[c.toString()]++
    } else {
      a[c.toString()] = 1
    }
    return a
  }, {})
