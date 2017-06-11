// @flow

/**
 * Returns false if any in input array is false
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
