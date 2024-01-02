import { uniq } from './uniq'

/**
 * Recursively flatten arrays
 * then uniq what's left
 * @example
 * flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ]]) // =>  [ 1, 2, 3 ]
 */

export const flattenAndUniq = <T>(arr: T[]): T[] =>
  uniq(arr.flat(Infinity) as T[])
