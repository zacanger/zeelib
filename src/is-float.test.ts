import { test } from 'node:test'
import * as assert from 'node:assert'
import { isFloat } from './is-float'

void test('isFloat', (): void => {
  assert.ok(isFloat(2.2), 'returns true for float')
  assert.ok(!isFloat(2), 'returns false for int')
  assert.ok(isFloat((() => 2.2)()), 'returns true for fn that returned float')
})
