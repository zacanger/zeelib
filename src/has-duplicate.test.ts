import { test } from 'node:test'
import * as assert from 'node:assert'
import { hasDuplicate } from './has-duplicate'

void test('hasDuplicate', (): void => {
  assert.ok(hasDuplicate([ 1, 1, 2 ]), 'returns true if duplicates')
  assert.ok(!hasDuplicate([ 1, 2, 3 ]), 'returns false if no duplicates')
})
