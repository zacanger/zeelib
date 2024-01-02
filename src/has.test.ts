import { test } from 'node:test'
import * as assert from 'node:assert'
import { has } from './has'

void test('has', (): void => {
  assert.ok(!has('a', { b: 'c' }), 'returns false if object does not have prop')
  assert.ok(has('a', { a: 'b' }), 'returns true of object has prop')
})
