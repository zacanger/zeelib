import isNumber from './isNumber'

const isArrayLike = (v) => v && isNumber(v.length)

export default isArrayLike
