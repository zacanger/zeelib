import isArrayLike from './is-array-like'
import isMap from './is-map'
import isObject from './is-object'
import isSet from './is-set'
import isString from './is-string'
import isFunction from './is-function'
import isNumber from './is-number'

/**
 * Get length of element
 *
 * Works for array, object, string, set, map, and function
 * @example
 * len('foo') // => 3
 * len([ 1, 2 ]) => 2
 * len((a, b) => a + b) // => 2
 */

const len = (val: any): number => {
  if (isNumber(val)) return val
  if (Array.isArray(val) || isString(val) || isFunction(val) || isArrayLike(val)) return val.length
  if (isMap(val) || isSet(val)) return val.size
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (isObject(val)) return Object.keys(val).length
  return 0
}

export default len
