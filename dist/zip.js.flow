// @flow

import pair from './pair'

/**
 * Makes a list of tuples
 * Each tuple is the elements of each passed array
 * at the same position
 * @example
 * zip([ 1, 2 ], [ 3, 4 ]) // => [ [ 1, 3 ], [ 2, 4 ] ]
 */

const zip = (xs: any[], ys: any[]): any[] =>
  xs.map((x, i) => pair(x, ys[i]))

export default zip
