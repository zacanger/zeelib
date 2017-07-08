// @flow

/**
 * Get an object of items in an array with count
 * @example
 * countItemsInArray([ 1, 1, 2, 3, 4 ]) // => { '1': 2, '2': 1, '3': 1, '4': 1 }
 */

const countItemsInArray = (arr: any[]): Object =>
  arr.reduce((a, c) => {
    a[c]++ ? 0 : a[c] = 1 // eslint-disable-line
    return a
  }, {})

export default countItemsInArray
