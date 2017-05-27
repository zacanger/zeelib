// @flow

/**
 * Get the greatest common diviser of all arguments
 */

function greatestCommonDivisor (): number {
  let i = arguments.length
  let a = arguments[--i]
  while (a && i) {
    let b = arguments[--i]
    while (b) {
      var c = a % b
      a = b
      b = c
    }
  }
  return a
}

export default greatestCommonDivisor
