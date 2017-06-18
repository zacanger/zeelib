// @flow

import car from './car'
import cdr from './cdr'

/**
 * `cdar`
 * @example
 * cdar([ [ 1, 2 ], 3 ]) // => [ 2 ]
 */

const cdar = (a: any[]): any =>
  cdr(car(a))

export default cdar
