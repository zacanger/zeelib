// @flow

import isArray from './isArray'

/**
 * Recursively flatten arrays
 */

const flatten = (arr: any[]): any[] =>
  isArray(arr) ? [].concat(...arr.map(flatten)) : arr

export default flatten
