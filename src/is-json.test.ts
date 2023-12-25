import { test } from 'node:test'
import * as assert from 'node:assert'
import isJson from './is-json'

void test('isJson', (): void => {
  assert.ok(!isJson('{"foo":"bar",baz:2}'), 'returns false for invalid JSON')
  assert.ok(isJson(JSON.stringify({ a: 'a' })), 'returns true for valid JSON')
})
