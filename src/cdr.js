// @flow

/**
 * `cdr`
 * @example
 * cdr([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
 */

const cdr = <T>(arr: T[]): T[] =>
  arr.slice(1)

export default cdr
