// @flow

/**
 * Takes a function and three lists
 *
 * Returns an array of elements calculated by
 * calling the function on the elements of
 * each list at the same position
 * @example
 * zipWith3(increment, [ 1, 1 ], [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2, 2 ]
 */

const zipWith3 = (
  fn: (...args: any[]) => any,
  xs: any[],
  ys: any[],
  zs: any[]
): any[] => {
  const res = []
  const yslen = ys.length
  const zslen = zs.length
  xs.forEach((_, i) => {
    if (i >= yslen || i >= zslen) {
      return res
    }
    res.push(fn(xs[i], ys[i], zs[i]))
  })
  return res
}

export default zipWith3
