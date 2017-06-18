// @flow

/**
 * Returns false if any in input array is false
 * @example
 * and([ 1, 2, 3 ]) // => true
 * and([ 1, 2, 3, false ]) // => false
 */

const and = (a: any[]): bool => {
  let r = true
  a.forEach((el) => {
    if (el === false) {
      r = false
    }
  })
  return r
}

export default and
