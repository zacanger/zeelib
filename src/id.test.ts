import { test } from 'node:test'
import * as assert from 'node:assert'
import id from './id'

void test('id', (): void => {
  assert.deepEqual(id({ a: 'a' }), { a: 'a' }, 'is id fn')
})
