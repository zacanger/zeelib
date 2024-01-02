import { test } from 'node:test'
import * as assert from 'node:assert'
import { xor } from './xor'

void test('xor', (): void => {
  assert.ok(!xor(1, 1), 'false for 1 and 1')
  assert.ok(xor(1, !1), 'true for 1 and !1')
})
