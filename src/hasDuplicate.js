// @flow

/**
 * Returns true if an array has any
 * duplicate elements
 */

const hasDuplicate = (a: any[]): bool =>
  a.some((v, i, s) => s.indexOf(v) !== i)

export default hasDuplicate
