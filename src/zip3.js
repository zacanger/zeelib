/**
 * Makes a list of tuples. Each list
 * is made of the elements of each list param's
 * elements at the same position
 * @param {array} any
 * @param {array} any
 * @param {array} any
 * @returns {array} any
 */

const zip3 = (a1, a2, a3) => {
  const a4 = []
  const a2len = a2.length, a3len = a3.length
  for (let i in a1) {
    if (i >= a2len || i >= a3len) {
      return a4
    }
    a4.push([a1[i], a2[i], a3[i]])
  }
  return a4
}

export default zip3
