// @flow

import curry from './curry'

/**
 * Reduce
 * @example
 * reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]) // => 10
 * reduce((a, b) => a + b)(0)([ 1, 2, 3, 4 ]) // => 10
 */

const reduce = curry((fn: any, initialValue: any, data: any[]): any => {
  let reducedValue = initialValue
  for (let i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
})

export default reduce
