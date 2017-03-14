// @flow

import isArrayLike from './isArrayLike'

const isNodeList = (v: any): bool =>
  isArrayLike(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '')

export default isNodeList
