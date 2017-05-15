import test from 'tape'
import tail from './tail'

test('tail', (t) => {
  t.deepEqual(tail([ 1, 2, 3, 4 ]), [ 2, 3, 4 ], 'returns xs')
  t.end()
})
