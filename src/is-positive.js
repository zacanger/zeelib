// @flow

/**
 * Returns true if number is positive
 */

const isPositive = (a: number): bool =>
  +a === a && a > 0

export default isPositive
