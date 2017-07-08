// @flow

import isArray from './is-array'

/**
 * Like Haskell's `concatMap`,
 * a one-level flatten of an array of arrays,
 * calling `f` on each of the sub-arrays
 * @example
 * import { doubleUntil } from 'zeelib'
 * const nested = [ [ 1, 2, 3 ], [ [ 4, 5, 6 ] ] ]
 * const f = (el) => doubleUntil(2)(el)
 * concatMap(f, nested) // => [ 1, 2, 3, [ 4, 5, 6 ], [ 4, 5, 6 ] ]
 */

const concatMap = (
  f: () => any,
  a: Array<any[]>
): any[] => {
  let res = []
  a.forEach((el) => {
    if (isArray(el)) {
      res = res.concat(f(el))
    }
  })
  return res
}

export default concatMap
