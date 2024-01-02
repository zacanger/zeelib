import { test } from 'node:test'
import * as assert from 'node:assert'
import { union } from './union'

void test('union', (): void => {
  assert.deepEqual(union([], [ 1, 2 ]), [ 1, 2 ], 'works with one empty array')
  assert.deepEqual(union([ 3, 4 ], [ 1, 2 ]), [ 3, 4, 1, 2 ], 'works with two filled arrays')
  assert.deepEqual(union([ 1 ], [ 1, 2 ]), [ 1, 2 ], 'returns union')
  assert.deepEqual(union([ 1 ], [ 1, 2 ], [ 1, 2 ]), [ 1, 2 ], 'works for three filled arrays')
})
