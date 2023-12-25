import { test } from 'node:test'
import * as assert from 'node:assert'
import isAlphaNumeric from './is-alpha-numeric'

void test('isAlphaNumeric', (): void => {
  assert.ok(isAlphaNumeric('asdf1235'), 'returns true')
  assert.ok(!isAlphaNumeric('!'), 'returns false')
})
