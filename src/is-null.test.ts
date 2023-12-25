import { test } from 'node:test'
import * as assert from 'node:assert'
import isNull from './is-null'

void test('isNull', (): void => {
  assert.ok(!isNull(0), 'returns false for 0')
  assert.ok(isNull(null), 'returns true for null')
})
