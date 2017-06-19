import test from 'tape'
import intersection from './intersection'

test('intersection', (t) => {
  t.deepEqual(intersection([], [ 1, 2 ]), [], 'returns empty array if either is empty')
  t.deepEqual(intersection([ 3, 4 ], [ 1, 2 ]), [], 'returns empty array if no matches')
  t.deepEqual(intersection([ 1 ], [ 1, 2 ]), [1], 'returns intersection otherwise')
  t.end()
})
