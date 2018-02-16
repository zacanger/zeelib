// @flow

import car from './car'
import cdr from './cdr'

/**
 * `cadr`
 * @example
 * cadr([ 1, 2, 3 ]) // => 2
 */

const cadr = <T>(a: T[]): T =>
  car(cdr(a))

export default cadr
