import { test } from 'node:test'
import * as assert from 'node:assert'
import { takeLast } from './take-last'

void test('takeLast', (): void => {
  assert.deepEqual(takeLast(2, [ 1, 2, 3, 4 ]), [ 3, 4 ], 'works')
  assert.deepEqual(takeLast(2, [ 0 ]), [ 0 ], 'returns arr if n is more than arr length')
})
