// @flow

import car from './car'

/**
 * `caar`
 * @example
 * caar([ [ 1 ] ]) // => 1
 */

const caar = <T>(a: T[][]): T =>
  car(car(a))

export default caar
