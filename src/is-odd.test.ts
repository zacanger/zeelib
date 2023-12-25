import { test } from 'node:test'
import * as assert from 'node:assert'
import isOdd from './is-odd'

void test('isOdd', (): void => {
  assert.ok(isOdd(1), 'returns true for odd int')
  assert.ok(isOdd(1.1), 'returns true for odd float')
  assert.ok(!isOdd(2), 'returns false for even int')
})
