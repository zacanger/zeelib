// @flow

/**
 * Find out how many of a given element is in an array
 * @example
 * getLengthOfItemsInArray(3, [ 1, 2, 3, 3 ]) // => 2
 */

const getLengthOfItemsInArray = (el: any, arr: any[]): number =>
  arr.filter((a) => a === el).length

export default getLengthOfItemsInArray
