// @flow

/**
 * Returns true if the number is negative
 */

const isNegative = (a: number): bool =>
  +a === a && a < 0

export default isNegative
