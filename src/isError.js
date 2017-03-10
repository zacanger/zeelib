// @flow
import objectToString from './objectToString'

const isError = (a: any): bool =>
  a instanceof Error || objectToString(a) === '[object Error]'

export default isError
