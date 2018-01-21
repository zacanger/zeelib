// @flow

import test from 'tape'
import id from './id'
import filter from './filter'

test('filter', (t): void => {
  const ar = [ 'a', 'b' ]
  const lessThanThree = (a: number): bool => a < 3
  t.deepEqual(filter(id, ar), ar, 'returns arr also passed when passed id fn')
  t.deepEqual(filter(lessThanThree, [ 1, 2, 3, 4 ]), [ 1, 2 ], 'works with predicate')
  t.deepEqual(filter(lessThanThree, { a: 1, b: 4 }), { a: 1 }, 'works with predicate with object')
  t.end()
})
