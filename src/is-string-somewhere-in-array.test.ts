import { test } from 'node:test'
import * as assert from 'node:assert'
import isStringSomewhereInArray from './is-string-somewhere-in-array'

void test('isStringSomewhereInArray', (): void => {
  assert.ok(isStringSomewhereInArray('a', [ 'asdf' ]), 'returns true for a and [ asdf ]')
  assert.ok(!isStringSomewhereInArray('a', [ 'ghjkl' ]), 'returns false for a and ghjkl')
})
