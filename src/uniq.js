// @flow

/**
 * Uniq an array
 * @example
 * uniq([ 1, 1, 2, 3 ]) // => [ 1, 2, 3 ]
 */

const uniq = (arr: any[]): any[] =>
  [ ...new Set(arr) ]

export default uniq
