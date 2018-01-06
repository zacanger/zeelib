// @flow
import objectToString from './object-to-string'

/**
 * Returns true if value is an error
 * @example
 * isError(new Error()) // => true
 */

const isError = (a: mixed): bool =>
  a instanceof Error || objectToString(a) === '[object Error]'

export default isError
