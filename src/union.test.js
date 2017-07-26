import test from 'tape'
import union from './union'

test('union', (t) => {
  t.deepEqual(union([], [ 1, 2 ]), [ 1, 2 ], 'works with one empty array')
  t.deepEqual(union([ 3, 4 ], [ 1, 2 ]), [ 3, 4, 1, 2 ], 'works with two filled arrays')
  t.deepEqual(union([ 1 ], [ 1, 2 ]), [ 1, 2 ], 'returns union')
  t.end()
})
