import { lesser } from './lesser'
import { greater } from './greater'

/**
 * Returns true if the last parameter is before the first and second parameters
 * @example
 * isBetween(1, 3, 2) // => true
 * isBetween(2, 1, 2) // => false
 */

export const isBetween = (a: number, b: number, mid: number): boolean => {
  const first = lesser(a, b)
  const last = greater(a, b)
  return first < mid && last > mid
}
