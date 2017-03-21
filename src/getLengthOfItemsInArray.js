// @flow

const getLengthOfItemsInArray = (a: any[], i: any): number =>
  a.filter((el) => el === i).length

export default getLengthOfItemsInArray
