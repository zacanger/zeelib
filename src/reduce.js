// @flow

import curry from './curry'

/**
 * Reduce
 */

const reduce = curry((fn: any, initialValue: any, data: any[]): any => {
  let reducedValue = initialValue
  for (let i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
})

export default reduce
