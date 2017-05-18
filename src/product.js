// @flow

/**
 * Get the product of a list of numbers
 */

const product = (a: number[]): number =>
  a.reduce((acc, curr) => acc * curr, 1)

export default product
