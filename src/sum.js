// @flow

/**
 * Sum an array of numbers
 */

const sum = (nums: number[]): number =>
  nums.reduce((acc, cur) => acc + cur, 0)

export default sum
