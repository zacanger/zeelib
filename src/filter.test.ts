import { test } from 'node:test'
import * as assert from 'node:assert'
import filter from './filter'

void test('filter', (): void => {
  const ar = [ 'a', 'b' ]
  const lessThanThree = (a: number): boolean => a < 3
  assert.deepEqual(filter((y) => !!y, ar), ar, 'returns arr also passed when passed id fn')
  assert.deepEqual(filter(lessThanThree, [ 1, 2, 3, 4 ]), [ 1, 2 ], 'works with predicate')
  assert.deepEqual(filter(lessThanThree, { a: 1, b: 4 }), { a: 1 }, 'works with predicate with object')
})
