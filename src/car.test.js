import test from 'tape'
import car from './car'

test('car', (t) => {
  t.plan(1)
  t.equal(car([ 1, 2, 3 ]), 1, 'returns x')
})
