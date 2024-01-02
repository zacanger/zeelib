/**
 * Returns true if an array has any
 * duplicate elements
 * @example
 * hasDuplicate([ 1, 1, 2 ]) // => true
 */

export const hasDuplicate = <T>(arr: T[]): boolean =>
  arr.some((v, i, s) => s.indexOf(v) !== i)
