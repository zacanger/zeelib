import { test } from 'node:test'
import * as assert from 'node:assert'
import { isRegExp } from './is-reg-exp'

void test('isRegExp', (): void => {
  assert.ok(isRegExp(/a/), 'returns true for regexp')
  assert.ok(!isRegExp('a'), 'returns false for non-regexp')
})
