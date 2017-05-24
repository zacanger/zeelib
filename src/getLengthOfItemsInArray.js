// @flow

/**
 * Find out how many of a given element is in an array
 */

const getLengthOfItemsInArray = (a: any[], i: any): number =>
  a.filter((el) => el === i).length

export default getLengthOfItemsInArray
