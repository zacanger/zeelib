// @flow

/**
 * Find out how many of a given element is in an array
 */

const getLengthOfItemsInArray = (arr: any[], el: any): number =>
  arr.filter((a) => a === el).length

export default getLengthOfItemsInArray
