/**
 * Takes a function and three lists
 *
 * Returns an array of elements calculated by
 * calling the function on the elements of
 * each list at the same position
 * @param {function} fn
 * @param {array} xs
 * @param {array} ys
 * @param {array} zs
 * @returns {array}
 * @example
 * zipWith3(increment, [ 1, 1 ], [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2, 2 ]
 */

const zipWith3 = (fn, xs, ys, zs) => {
  const res = []
  const yslen = ys.length
  const zslen = zs.length
  for (let i in xs) {
    if (i >= yslen || i >= zslen) {
      return res
    }
    res.push(fn(xs[i], ys[i], zs[i]))
  }
  return res
}

export default zipWith3
