import test from 'tape'
import replicate from './replicate'

test('replicate', (t) => {
  t.deepEqual(replicate(4, 1), [ 1, 1, 1, 1 ], 'works for simple elements')
  t.deepEqual(replicate(4, (a) => a + 1), [ 5, 5, 5, 5 ], 'works with function')
  t.end()
})
