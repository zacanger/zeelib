// @flow

import test from 'tape'
import car from './car'

test('car', (t): void => {
  t.equal(car([ 1, 2, 3 ]), 1, 'returns x')
  t.end()
})
