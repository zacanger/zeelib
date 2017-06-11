// @flow

/**
 * Return true if any val in input array is true
 */

const or = (a: any[]): bool => {
  let r = false
  a.forEach((el) => {
    if (el === true) {
      r = true
    }
  })
  return r
}

export default or
