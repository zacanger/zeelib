import { test } from 'node:test'
import * as assert from 'node:assert'
import isValidDate from './is-valid-date'

void test('isValidDate', (): void => {
  assert.ok(isValidDate(new Date()), 'returns true for new Date()')
})
