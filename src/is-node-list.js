// @flow

import isArrayLike from './is-array-like'

/**
 * Returns true if the value is a nodelist
 * @example
 * isNodeList(document.getElementsByTagName('span')) // => true
 */

const isNodeList = (v: any): bool =>
  isArrayLike(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '')

export default isNodeList
