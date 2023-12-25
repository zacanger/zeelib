/**
 * Get the product of a list of numbers
 * @example
 * product([ 1, 2, 3, 4 ]) // => 24
 */

const product = (nums: number[]): number =>
  nums.reduce((acc, curr) => acc * curr, 1)

export default product
