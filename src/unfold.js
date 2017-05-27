// @flow

import isArray from './is-array'

/**
 * Builds a list from a seed
 * Takes an iterating fn and an array seed
 */

const unfold = (
  fn: () => any,
  seed: any
): any[] => {
  const r = fn(seed)
  if (!isArray(r)) {
    return []
  }
  return [r[0]].concat(unfold(fn, r[1]))
}

export default unfold
