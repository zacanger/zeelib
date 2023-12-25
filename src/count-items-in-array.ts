type Acc = Record<string, number>

/**
 * Get an object of items in an array with count
 * @example
 * countItemsInArray([ 1, 1, 2, 3, 4 ]) // => { '1': 2, '2': 1, '3': 1, '4': 1 }
 */

const countItemsInArray = <T>(arr: T[]): Acc =>
  arr.reduce((a: Acc, c: any): Acc => {
    if (a[c.toString()]) {
      a[c.toString()]++
    } else {
      a[c.toString()] = 1
    }
    return a
  }, {})

export default countItemsInArray
