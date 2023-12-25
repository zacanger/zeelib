import len from './len'
import isNullOrUndefined from './is-null-or-undefined'
import mzero from './mzero'

/**
 * Returns true if the value is empty
 * @example
 * isEmpty('') // => true
 * isEmpty({}) // => true
 * isEmpty([]) // => true
 * isEmpty(null) // => true
 */

const isEmpty = (v: any): boolean =>
  isNullOrUndefined(v) || len(v) === 0 || !v || mzero(v) === v

export default isEmpty
