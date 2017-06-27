import test from 'tape'
import pairWith from './pair-with'

test('pairWith', (t) => {
  const inc = (a) => a + 1
  t.deepEqual(pairWith(inc, 1, 1), [ 2, 2 ], 'works')
  t.end()
})
