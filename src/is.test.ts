import { test } from 'node:test'
import * as assert from 'node:assert'
import { is } from './is'

void test('is', (): void => {
  assert.ok(is('number', 2), 'returns true for number and 2')
  assert.ok(!is('number', 'a'), 'returns false for number and string')
})
