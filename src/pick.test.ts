import { test } from 'node:test'
import * as assert from 'node:assert'
import { pick } from './pick'

void test('pick', (): void => {
  assert.deepEqual(pick('a', { a: 'a', b: 'b' }), { a: 'a' }, 'works for string arg')
  assert.deepEqual(pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }), { a: 'a', b: 'b' }, 'works for array arg')
})
