// @flow

import car from './car'

const caar = (a: any[]): any =>
  car(car(a))

export default caar
