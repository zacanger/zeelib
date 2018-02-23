// @flow

/**
 * Takes a number, min, and max
 * If number is between min and max, returns number
 * Otherwise returns min or max
 * @example
 * clamp(100, 0, 1000) // => 100
 * clamp(100, 101, 1000) // => 101
 * clamp(100, 0, 99) // => 00
 */

const clamp = (val: number, min: number, max: number): number =>
  val < min ? min : val > max ? max : val

export default clamp
