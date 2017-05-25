/**
 * Makes a list of tuples. Each list
 * is made of the elements of each list param's
 * elements at the same position
 * @param {array} xs
 * @param {array} ys
 * @param {array} zs
 * @returns {array}
 */

const zip3 = (xs, ys, zs) => {
  const res = []
  const yslen = ys.length
  const zslen = zs.length
  for (let i in xs) {
    if (i >= yslen || i >= zslen) {
      return res
    }
    res.push([xs[i], ys[i], zs[i]])
  }
  return res
}

export default zip3
