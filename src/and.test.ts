import { test } from 'node:test'
import * as assert from 'node:assert'
import and from './and'

void test('and', (): void => {
  assert.ok(and([ 1, 2, 3 ]), 'returns true if no false')
  assert.ok(!and([ 1, 2, 3, false ]), 'returns false if one false')
})
