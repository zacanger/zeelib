// @flow

import curry from './curry'

/**
 * Reduce
 * @example
 * reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]) // => 10
 * reduce((a, b) => a + b)(0)([ 1, 2, 3, 4 ]) // => 10
 */

const reduce = curry(<A, B>(fn: (B, A) => B, initialValue: B, data: A[]): B => {
  let reducedValue: B = initialValue
  for (let i: number = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
})

export default reduce
