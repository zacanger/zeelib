// @flow
import objectToString from './objectToString'

/**
 * Returns true if value is an error
 */

const isError = (a: any): bool =>
  a instanceof Error || objectToString(a) === '[object Error]'

export default isError
