import { type AnyMap } from './types'

/**
 * See if an object has a property
 * @example
 * has('a' { b: 'c' }) // => false
 */

export const has = (p: string, o: AnyMap): boolean =>
  Object.prototype.hasOwnProperty.call(o, p)
