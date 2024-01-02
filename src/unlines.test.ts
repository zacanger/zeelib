import { test } from 'node:test'
import * as assert from 'node:assert'
import { unlines } from './unlines'

void test('unlines', (): void => {
  assert.equal(unlines([ 'foo', 'bar' ]), 'foo\nbar', 'makes string joined with newline')
})
