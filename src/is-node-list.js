// @flow

import isArrayLike from './is-array-like'

/**
 * Returns true if the value is a nodelist
 */

const isNodeList = (v: any): bool =>
  isArrayLike(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '')

export default isNodeList
