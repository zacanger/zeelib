/**
 * Returns true if number is a power of two
 * @example
 * isPow2(16) // => true
 */

const isPow2 = (n: number): boolean =>
  1 << (n.toString(2).length - 1) === n

export default isPow2
