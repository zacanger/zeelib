import { test } from 'node:test'
import * as assert from 'node:assert'
import words from './words'

void test('words', (): void => {
  assert.deepEqual(words('foo bar'), [ 'foo', 'bar' ], 'makes arr split on space')
  assert.deepEqual(words(''), [], 'returns an empty array for an empty string')
})
