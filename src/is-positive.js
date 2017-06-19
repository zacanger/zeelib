// @flow

/**
 * Returns true if number is positive
 * @example
 * isPositive(1) // => true
 */

const isPositive = (a: number): bool =>
  +a === a && a > 0

export default isPositive
