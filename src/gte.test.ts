import { test } from 'node:test'
import * as assert from 'node:assert'
import { gte } from './gte'

void test('gte', (): void => {
  assert.ok(gte(2, 1), 'returns true for 2 and 1')
  assert.ok(!gte(1.1, 1.9), 'returns false for 1.1 and 1.9')
  assert.ok(gte(1, 1), 'returns true for 1 and 1')
})
