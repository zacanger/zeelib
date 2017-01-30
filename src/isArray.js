import objectToString from './objectToString'

const isArray = Array.isArray || function (v) {
  return objectToString.call(v) === '[object Array]'
}

export default isArray
