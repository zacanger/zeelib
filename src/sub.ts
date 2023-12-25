/**
 * Subtract any amount of numbers
 * @example
 * sub([ 4, 3, 2, 1 ]) // => -2
 */

const sub = (ns: number[]): number =>
  ns.reduce((a, c) => a - c)

export default sub
