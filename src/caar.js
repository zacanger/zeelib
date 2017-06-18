// @flow

import car from './car'

/**
 * `caar`
 * @example
 * caar([ [ 1 ] ]) // => 1
 */

const caar = (a: any[]): any =>
  car(car(a))

export default caar
