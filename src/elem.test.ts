import { test } from 'node:test'
import * as assert from 'node:assert'
import { elem } from './elem'

void test('elem', (): void => {
  assert.ok(elem('a', 'asdf'), 'works for strings')
  assert.ok(elem('a', 'asdf'.split('')), 'works for arrays')
  assert.ok(!elem('a', 'b'), 'returns false if not in string')
  assert.ok(!elem('a', [ 'b' ]), 'returns false if not in array')
})
