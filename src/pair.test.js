import test from 'tape'
import pair from './pair'

test('pair', (t) => {
  t.plan(1)
  t.deepEqual(pair('a', 'b'), [ 'a', 'b' ], 'puts things in a pair')
})
