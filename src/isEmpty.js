import isString from './isString'
import isArrayLike from './isArrayLike'
import isObject from './isObject'

const isEmpty = v => {
  if (isString(v)) return /^\s*$/.test(v)
  if (isArrayLike(v)) return !v.length
  if (isObject(v)) return !Object.keys(v).length
  return !v
}

export default isEmpty
