import { isNullOrUndefined } from './is-null-or-undefined'
/**
 * nco
 * @example
 * nco(null, 1) // => 1
 * nco(1, 2) // => 1
 */

/** @deprecated will be removed in v13 */
export const nco = <A, B> (variable: A, defaultValue: B): A | B =>
  isNullOrUndefined(variable) ? defaultValue : variable
