// @flow

import filter from './filter'

/**
 * Takes a predicate and an array
 * Returns either first element that passes predicate,
 * or null
 * @example
 * findWhere(lessThanThree, [ 3, 3, 3 ]) // => null
 * findWhere(lessThanThree, [ 3, 2, 1 ]) // => 2
 */

const findWhere = (
  f: () => bool,
  arr: any[]
): any =>
  filter(f, arr)[0] || null

export default findWhere
