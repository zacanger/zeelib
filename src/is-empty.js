// @flow

import length from './length'
import isNullOrUndefined from './is-null-or-undefined'

/**
 * Returns true if the value is empty
 * @example
 * isEmpty('') // => true
 * isEmpty({}) // => true
 * isEmpty([]) // => true
 * isEmpty(null) // => true
 */

const isEmpty = (v: mixed): bool =>
  isNullOrUndefined(v) || length(v) === 0 || !v

export default isEmpty
