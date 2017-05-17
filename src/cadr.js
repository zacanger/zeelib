// @flow

import car from './car'
import cdr from './cdr'

/**
 * `cadr`
 */

const cadr = (a: any[]): any =>
  car(cdr(a))

export default cadr
