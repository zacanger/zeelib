import test from 'tape'
import take from './take'

test('take', (t) => {
  t.deepEqual(take(2, [1, 2, 3]), [ 1, 2 ], 'works')
  t.end()
})
