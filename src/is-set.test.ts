import { test } from 'node:test'
import * as assert from 'node:assert'
import { isSet } from './is-set'

void test('isSet', (): void => {
  assert.ok(isSet(new Set()), 'returns true for set')
  assert.ok(!isSet([]), 'returns false for non-set')
})
