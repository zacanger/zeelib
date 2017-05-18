// @flow

import isArray from './isArray'
/**
 * Like Haskell's `concatMap`,
 * a one-level flatten of an array of arrays,
 * calling `f` on each of the sub-arrays
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
