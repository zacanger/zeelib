import test from 'tape'
import concatMap from './concat-map'
import doubleUntil from './double-until'

test('concatMap', (t) => {
  const nested = [ [ 1, 2, 3 ], [ [ 4, 5, 6 ] ] ]
  const expected = [ 1, 2, 3, [ 4, 5, 6 ], [ 4, 5, 6 ] ]
  const f = (el) => doubleUntil(2)(el)
  t.deepEqual(concatMap(f, nested), expected, 'works')
  t.end()
})
