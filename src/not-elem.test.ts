import { test } from 'node:test'
import * as assert from 'node:assert'
import notElem from './not-elem'

void test('notElem', (): void => {
  assert.ok(!notElem('a', 'asdf'), 'works for strings')
  assert.ok(!notElem('a', 'asdf'.split('')), 'works for arrays')
  assert.ok(notElem('a', 'b'), 'returns true if not in string')
  assert.ok(notElem('a', [ 'b' ]), 'returns true if not in array')
})
