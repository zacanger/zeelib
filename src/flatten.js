// @flow

import isArray from './is-array'

/**
 * Recursively flatten arrays
 */

const flatten = (arr: any[]): any[] =>
  isArray(arr) ? [].concat(...arr.map(flatten)) : arr

export default flatten
