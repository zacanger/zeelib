// @flow

import objectToString from './objectToString'

const isRegExp = (v: any): bool =>
  objectToString.call(v) === '[object RegExp]'

export default isRegExp
