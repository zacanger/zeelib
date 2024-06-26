import { type AnyMap } from './types'

/**
 * Tries to parse JSON, if is JSON
 * @example
 * tryJson('[1,2]') // => [ 1, 2 ]
 * tryJson([ 1, 2 ]) // => [ 1, 2 ]
 */

export const tryJson = <T>(o: T): T | AnyMap => {
  const m = o as unknown as string
  try {
    return JSON.parse(m)
  } catch {
    return o
  }
}
