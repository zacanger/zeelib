/**
 * Returns true if any passes predicate
 * @param {function} predicate
 * @param {array} array of anything
 * @returns {boolean}
 */

const any = (f, a) => {
  for (let i in a) {
    if (f(a[i]) === true) {
      return true
    }
  }
  return false
}

export default any
