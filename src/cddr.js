// @flow

import cdr from './cdr'

/**
 * `cddr`
 * @example
 * cddr([ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

const cddr = (a: *[]): *[] =>
  cdr(cdr(a))

export default cddr
