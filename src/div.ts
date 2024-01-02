/**
 * Divide any amount of numbers
 * @example
 * div([ 4, 2, 1 ]) // => 2
 */

export const div = (ns: number[]): number =>
  ns.reduce((a, c) => a / c)
