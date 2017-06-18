/**
 * Returns true if any passes predicate
 * @param {function} predicate
 * @param {array} array of anything
 * @returns {boolean}
 * @example
 * any(lessThanThree, [ 1, 2, 3 ]) // => true
 * any(lessThanThree, [ 4, 5, 6 ]) // => false
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
