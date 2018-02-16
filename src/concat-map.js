// @flow

import concat from './concat'

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
  f: (*) => *,
  a: Array<*[]>
): *[] =>
  concat(a.map(f))

export default concatMap
