/**
 * Returns false if any in input is false
 * @param {array} array of any
 * @returns {boolean}
 */

const and = (a) => {
  for (let i in a) {
    if (a[i] === false) {
      return false
    }
  }
  return true
}

export default and
