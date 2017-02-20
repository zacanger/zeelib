import isNan from './isNan'

const isNumber = (v) => typeof v === 'number' && !isNan(v)

export default isNumber
