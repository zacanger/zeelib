import test from 'tape'
import unzip3 from './unzip-3'

test('unzip3', (t) => {
  const expected = [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
  t.deepEqual(unzip3([ [ 1, 1, 1 ], [ 2, 2, 2 ] ]), expected, 'works')
  t.end()
})
