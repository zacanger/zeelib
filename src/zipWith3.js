/**
 * Takes a function and three lists
 * Returns an array of elements calculated by
 * calling the function on the elements of
 * each list at the same position
 * @param {function} any
 * @param {array} any
 * @param {array} any
 * @param {array} any
 * @returns {array} any
 */

const zipWith3 = (f, a1, a2, a3) => {
  const a4 = []
  const a2len = a2.length, a3len = a3.length
  for (let i in a1) {
    if (i >= a2len || i >= a3len) {
      return a4
    }
    a4.push(f(a1[i], a2[i], a3[i]))
  }
  return a4
}

export default zipWith3
