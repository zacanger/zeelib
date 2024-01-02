import { test } from 'node:test'
import * as assert from 'node:assert'
import { isBoolean } from './is-boolean'

void test('isBoolean', (): void => {
  assert.ok(!isBoolean(1), 'returns false for 1')
  assert.ok(!isBoolean(''), 'returns false for empty string')
  assert.ok(isBoolean(true), 'returns true for true')
  assert.ok(isBoolean(false), 'returns true for false')
})
