import test from 'tape'
import map from './map'

test('map', (t) => {
  const inc = (a) => a + 1
  t.deepEqual(map(inc, [ 1, 2, 3 ]), [ 2, 3, 4 ], 'maps')
  t.end()
})
