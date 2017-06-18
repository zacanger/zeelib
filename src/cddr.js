// @flow

/**
 * `cddr`
 * @example
 * cddr([ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

import cdr from './cdr'

const cddr = (a: any[]): any =>
  cdr(cdr(a))

export default cddr
