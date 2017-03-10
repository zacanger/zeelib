// @flow

import isNan from './isNan'

const isNumber = (v: any): bool =>
  typeof v === 'number' && !isNan(v)

export default isNumber
