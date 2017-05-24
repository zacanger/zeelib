// @flow

import greatestCommonDivisor from './greatestCommonDivisor'

/**
 * Returns least common multiple of all arguments
 */

function leastCommonMultiple (): number {
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    a = a * b / greatestCommonDivisor(a, b)
  }
  return a
}

export default leastCommonMultiple
