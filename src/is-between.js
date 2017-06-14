// @flow

import lesser from './lesser'
import greater from './greater'
import gt from './gt'
import lt from './lt'

/**
 * Returns true if the last parameter is before the first and second parameters
 */

const isBetween = (a: number, b: number, mid: number): bool => {
  const first = lesser(a, b)
  const last = greater(a, b)
  return lt(first, mid) && gt(last, mid)
}

export default isBetween
