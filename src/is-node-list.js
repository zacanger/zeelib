// @flow

import isArrayLike from './is-array-like'

/**
 * Returns true if the value is a nodelist
 * @example
 * isNodeList(document.getElementsByTagName('span')) // => true
 */

const isNodeList = (v: mixed): bool => {
  if (v && isArrayLike(v) && typeof v.toString === 'function') {
    return /^\[object (HTMLCollection|NodeList)\]$/.test(v.toString())
  }
  return false
}

export default isNodeList
