// @flow

/**
 * Returns true if the number is a float
 */

const isFloat = (n: number): bool =>
  (n | 0) !== n

export default isFloat
