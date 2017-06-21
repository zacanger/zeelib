// @flow

import greatestCommonDivisor from './greatest-common-divisor'

function leastCommonMultiple (): number {
  console.error('`leastCommonMultiple` is deprecated.')
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    a = a * b / greatestCommonDivisor(a, b)
  }
  return a
}

export default leastCommonMultiple
