// @flow

import isNumber from './isNumber'

const isArrayLike = (v: any) : bool =>
  v && isNumber(v.length)

export default isArrayLike
