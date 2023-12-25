import { test } from 'node:test'
import * as assert from 'node:assert'
import isInteger from './is-integer'

void test('isInteger', (): void => {
  const f = (): number => 2
  assert.ok(!isInteger('2'), 'returns false for string')
  assert.ok(!isInteger({ one: 2 }), 'returns false for obj')
  assert.ok(!isInteger([ 2 ]), 'returns false for arr')
  assert.ok(isInteger(2), 'returns true for int')
  assert.ok(!isInteger(2.22), 'returns false for float')
  assert.ok(isInteger(f()), 'returns true for fn that returns number')
})
