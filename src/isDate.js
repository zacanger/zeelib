// @flow

import objectToString from './objectToString'

const isDate = (v: any): bool =>
  objectToString.call(v) === '[object Date]'

export default isDate
