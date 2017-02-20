// @flow

import objectToString from './objectToString'

const isArray = Array.isArray || function (v: any) : bool {
  return objectToString.call(v) === '[object Array]'
}

export default isArray
