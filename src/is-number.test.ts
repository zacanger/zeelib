import { test } from 'node:test'
import * as assert from 'node:assert'
import { isNumber } from './is-number'

void test('isNumber', (): void => {
  const f = (): number => 2
  assert.ok(!isNumber('2'), 'returns false for string')
  assert.ok(!isNumber({ one: 2 }), 'returns false for obj')
  assert.ok(!isNumber([ 2 ]), 'returns false for arr')
  assert.ok(isNumber(2), 'returns true for int')
  assert.ok(isNumber(2.22), 'returns true for float')
  assert.ok(isNumber(f()), 'returns true for fn that returns number')
})
