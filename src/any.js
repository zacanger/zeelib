// @flow

/**
 * Returns true if any passes predicate
 * @example
 * any(lessThanThree, [ 1, 2, 3 ]) // => true
 * any(lessThanThree, [ 4, 5, 6 ]) // => false
 */

const any = (f: (any) => any, a: any[]): bool => {
  let r: bool = false
  a.forEach((e) => {
    if (f(e) === true) {
      r = true
    }
  })
  return r
}

export default any
