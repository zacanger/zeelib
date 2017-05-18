// @flow

import isArray from './isArray'
/**
 * Like Haskell's `concat`,
 * a one-level flatten of an array of arrays
 */

const concat = (a: Array<any[]>): any[] => {
  let res = []
  a.forEach((e) => {
    if (isArray(e)) {
      res = res.concat(e)
    }
  })
  return res
}

export default concat
