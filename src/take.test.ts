import { test } from 'node:test'
import * as assert from 'node:assert'
import take from './take'

void test('take', (): void => {
  assert.deepEqual(take(2, [ 1, 2, 3 ]), [ 1, 2 ], 'works')
  assert.deepEqual(take(2, [ 0 ]), [ 0 ], 'returns arr if n is greater than arr length')
})
