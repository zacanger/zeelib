import test from 'tape'
import zip3 from './zip-3'

test('zip3', (t) => {
  const expected = [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
  t.deepEqual(zip3([ 1, 2 ], [ 3, 4 ], [ 5, 6 ]), expected, 'works')
  t.end()
})
