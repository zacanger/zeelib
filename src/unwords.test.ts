import { test } from 'node:test'
import * as assert from 'node:assert'
import { unwords } from './unwords'

void test('unwords', (): void => {
  assert.equal(unwords([ 'foo', 'bar' ]), 'foo bar', 'makes string joined with space')
})
