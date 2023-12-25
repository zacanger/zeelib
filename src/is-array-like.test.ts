import { test } from 'node:test'
import * as assert from 'node:assert'
import isArrayLike from './is-array-like'

void test('isArrayLike', (): void => {
  const foo = (): number[] => [ 0, 1 ]
  assert.ok(!isArrayLike({}), 'returns false for obj')
  assert.ok(isArrayLike([]), 'returns true for empty arr')
  assert.ok(isArrayLike(foo()), 'returns true for fn that returns arr')
})
