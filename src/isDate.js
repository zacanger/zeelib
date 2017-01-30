import objectToString from './objectToString'

const isDate = v => objectToString.call(v) === '[object Date]'
export default isDate
