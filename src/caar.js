// @flow

import car from './car'

/**
 * `caar`
 * @example
 * caar([ [ 1 ] ]) // => 1
 */

const caar = (a: *[]): * =>
  car(car(a))

export default caar
