import { test } from 'node:test'
import * as assert from 'node:assert'
import isBetween from './is-between'

void test('isBetween', (): void => {
  assert.ok(isBetween(1, 3, 2), 'returns true for 1, 3, and 2')
  assert.ok(isBetween(3, 1, 2), 'returns true for 3, 1, and 2')
  assert.ok(!isBetween(2, 1, 2), 'returns false for 2, 1, and 2')
})
