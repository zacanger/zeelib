import { test } from 'node:test'
import * as assert from 'node:assert'
import truncate from './truncate'

void test('truncate', (): void => {
  assert.equal(truncate('asdf asdf asdf asdf', 4), 'asd…', 'works with default tail')
  assert.equal(truncate('asdf asdf asdf asdf asdf', 8, ' etc.'), 'asd etc.', 'works with passed tail')
})
