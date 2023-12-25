import { test } from 'node:test'
import * as assert from 'node:assert'
import lines from './lines'

void test('lines', (): void => {
  assert.deepEqual(lines('foo\nbar'), [ 'foo', 'bar' ], 'makes arr split on newline')
})
