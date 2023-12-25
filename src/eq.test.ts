import { test } from 'node:test'
import * as assert from 'node:assert'
import eq from './eq'

void test('eq', (): void => {
  assert.ok(eq(1, 1), 'works for primitives')
  assert.ok(eq({ a: 'a' }, { a: 'a' }), 'works for objects')
  assert.ok(!eq({ a: 'b' }, { b: 'a' }), 'returns false if not eq')
})
