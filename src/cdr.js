// @flow

/**
 * `cdr`
 * @example
 * cdr([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
 */

const cdr = (arr: any[]): any =>
  arr.slice(1)

export default cdr
