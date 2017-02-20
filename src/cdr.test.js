import test from 'tape'
import cdr from './cdr'

test('cdr', (t) => {
  t.plan(1)
  t.deepEqual(cdr([ 1, 2, 3, 4 ]), [ 2, 3, 4 ], 'returns xs')
})
