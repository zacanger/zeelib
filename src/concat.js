// @flow

import isArray from './is-array'

/**
 * Like Haskell's `concat`,
 * a one-level flatten of an array of arrays
 * @example
 * const nested = [ [ 1, 2, 3 ], [ [ 4, 5, 6 ] ] ]
 * concat(nested) // => [ 1, 2, 3, [ 4, 5, 6 ] ]
 */

const concat = (a: Array<any[]>): any[] =>
  a.reduce((a: any[], b: any[]) => a.concat(b))

export default concat
