// @flow

import objectToString from './objectToString'

const isObject = (v: any): bool =>
  objectToString.call(v) === '[object Object]'

export default isObject
