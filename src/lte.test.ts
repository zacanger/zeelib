import { test } from 'node:test'
import * as assert from 'node:assert'
import lte from './lte'

void test('lte', (): void => {
  assert.ok(!lte(2, 1), 'returns false for 2 and 1')
  assert.ok(lte(1.1, 1.9), 'returns true for 1.1 and 1.9')
  assert.ok(lte(1, 1), 'returns true for 1 and 1')
})
