import { test } from 'node:test'
import * as assert from 'node:assert'
import { drop } from './drop'

void test('drop', (): void => {
  assert.deepEqual(drop(2, [ 1, 2, 3 ]), [ 3 ], 'works')
  assert.deepEqual(drop(2, [ 0 ]), [], 'returns empty arr if n is greater than arr length')
  assert.deepEqual(drop(0, [ 0 ]), [ 0 ], 'returns arr if n is less than 1')
})
