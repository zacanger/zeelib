import { isNull } from './is-null'
import { isUndefined } from './is-undefined'

/**
 * Returns true if the value is null or undefined
 * @example
 * isNullOrUndefined(null) // => true
 */

export const isNullOrUndefined = (v: any): boolean =>
  isNull(v) || isUndefined(v)
