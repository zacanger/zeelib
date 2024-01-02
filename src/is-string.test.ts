import { test } from 'node:test'
import * as assert from 'node:assert'
import { isString } from './is-string'

void test('isString', (): void => {
  assert.ok(isString('asdf'), 'returns true for string')
  assert.ok(!isString([]), 'returns false for non-string')
})
