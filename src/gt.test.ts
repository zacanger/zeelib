import { test } from 'node:test'
import * as assert from 'node:assert'
import { gt } from './gt'

void test('gt', (): void => {
  assert.ok(gt(2, 1), 'returns true for 2 and 1')
  assert.ok(!gt(1.1, 1.9), 'returns false for 1.1 and 1.9')
})
