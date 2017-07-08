// @flow

import isArray from './is-array'

/**
 * Recursively flatten arrays
 * @example
 * flatten([ 1, 2, 3, [ 1, 2, 3 ] ]) // => [ 1, 2, 3, 1, 2, 3 ]
 */

const flatten = (arr: any[]): any[] =>
  isArray(arr) ? [].concat(...arr.map(flatten)) : arr

export default flatten
