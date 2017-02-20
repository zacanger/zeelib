import objectToString from './objectToString'

const isObject = (v) => objectToString.call(v) === '[object Object]'

export default isObject
