// @flow

/**
 * Makes a list of tuples
 *
 * Each list is made of the elements of each list param's
 * elements at the same position
 * @example
 * zip3([ 1, 2 ], [ 3, 4 ], [ 5, 6 ]) // => [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
 */

const zip3 = (xs: any[], ys: any[], zs: any[]): Array<any[]> => {
  const res = []
  const yslen = ys.length
  const zslen = zs.length
  xs.forEach((_, i) => {
    if (i >= yslen || i >= zslen) {
      return res
    }
    res.push([ xs[i], ys[i], zs[i] ])
  })
  return res
}

export default zip3
