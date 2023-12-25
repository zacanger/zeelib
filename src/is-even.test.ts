import { test } from 'node:test'
import * as assert from 'node:assert'
import isEven from './is-even'

void test('isEven', (): void => {
  assert.ok(!isEven(1), 'returns false for odd int')
  assert.ok(!isEven(1.1), 'returns false for odd float')
  assert.ok(isEven(2), 'returns true for even int')
  assert.ok(isEven(2.2), 'returns true for even float')
})
