// @flow

/**
 * `car` (same as `head`)
 * @example
 * car([ 1, 2, 3 ]) // => 1
 */

const car = <T>(arr: T[]): T =>
  arr[0]

export default car
