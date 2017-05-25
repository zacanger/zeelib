// @flow

import filter from './filter'

/**
 * Takes a predicate and an array
 * Returns either first element that passes predicate,
 * or null
 */

const findWhere = (
  f: () => bool,
  arr: any[]
): any =>
  filter(arr, f)[0] || null

export default findWhere
