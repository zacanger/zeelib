import { test } from 'node:test'
import * as assert from 'node:assert'
import intersection from './intersection'

void test('intersection', (): void => {
  assert.deepEqual(intersection([], [ 1, 2 ]), [], 'returns empty array if either is empty')
  assert.deepEqual(intersection([ 3, 4 ], [ 1, 2 ]), [], 'returns empty array if no matches')
  assert.deepEqual(intersection([ 1 ], [ 1, 2 ]), [ 1 ], 'returns intersection otherwise')
})
