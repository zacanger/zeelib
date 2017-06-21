// @flow

/**
 * Returns true if the number is negative
 * @example
 * isNegative(-1) // => true
 */

const isNegative = (a: number): bool =>
  +a === a && a < 0

export default isNegative
