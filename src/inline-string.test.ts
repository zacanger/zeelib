import { test } from 'node:test'
import * as assert from 'node:assert'
import inlineString from './inline-string'

void test('inlineString', () => {
  assert.equal(inlineString('asdfasdf \n\n asdfasdf'), 'asdfasdf asdfasdf', 'works')
})
