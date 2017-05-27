// @flow

/**
 * Returns true if an array has any
 * duplicate elements
 */

const hasDuplicate = (arr: any[]): bool =>
  arr.some((v, i, s) => s.indexOf(v) !== i)

export default hasDuplicate
