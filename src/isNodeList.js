// @flow

import isArrayLike from './isArrayLike'

/**
 * Returns true if the value is a nodelist
 */

const isNodeList = (v: any): bool =>
  isArrayLike(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '')

export default isNodeList
