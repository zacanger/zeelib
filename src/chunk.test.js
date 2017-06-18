import test from 'tape'
import chunk from './chunk'

test('chunk', (t) => {
  t.deepEqual(chunk([ 1, 2, 3, 4 ], 2), [ [ 1, 2 ], [ 3, 4 ] ], 'works')
  t.end()
})
