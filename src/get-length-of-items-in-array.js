// @flow

/**
 * Find out how many of a given element is in an array
 */

const getLengthOfItemsInArray = (el: any, arr: any[]): number =>
  arr.filter((a) => a === el).length

export default getLengthOfItemsInArray
