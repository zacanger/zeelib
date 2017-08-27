// @flow

/**
 * Divide any amount of numbers
 * @example
 * div([ 4, 2, 1 ]) // => 2
 */

const div = (ns: number[]): number =>
  ns.reduce((a, c) => a / c)

export default div
