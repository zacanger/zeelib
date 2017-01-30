import objectToString from './objectToString'

const isRegExp = v => objectToString.call(v) === '[object RegExp]'
export default isRegExp
