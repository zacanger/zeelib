// @flow

import car from './car'

/**
 * `caar`
 */

const caar = (a: any[]): any =>
  car(car(a))

export default caar
