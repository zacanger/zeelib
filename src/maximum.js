// @flow

/**
 * Get the largest number from an array
 * @example
 * maximum([ 1, 2, 3, 4, 5 ]) // => 5
 */

const maximum = (nums: number[]): number =>
  Math.max.apply(Math, nums)

export default maximum
