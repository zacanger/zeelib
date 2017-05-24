// @flow

/**
 * Averages a list of numbers
 */

const average = (xs: number[]): number => {
  const t = xs.reduce((a, b) => a + b, 0)
  return t / xs.length
}

export default average
