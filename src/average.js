// @flow

/**
 * Averages a list of numbers
 * @example
 * average([ 2, 4, 6, 8 ]) // => 5
 */

const average = (xs: number[]): number => {
  const t = xs.reduce((a, b) => a + b, 0)
  return t / xs.length
}

export default average
