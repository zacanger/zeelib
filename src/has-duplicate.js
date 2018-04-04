// @flow

/**
 * Returns true if an array has any
 * duplicate elements
 * @example
 * hasDuplicate([ 1, 1, 2 ]) // => true
 */

const hasDuplicate = <T>(arr: T[]): bool =>
  arr.some((v, i, s) => s.indexOf(v) !== i)

export default hasDuplicate
