// @flow

/**
 * `cdar`
 */

import car from './car'
import cdr from './cdr'

const cdar = (a: any[]): any =>
  cdr(car(a))

export default cdar
