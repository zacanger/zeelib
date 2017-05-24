// @flow

/**
 * Get the product of a list of numbers
 */

const product = (nums: number[]): number =>
  nums.reduce((acc, curr) => acc * curr, 1)

export default product
