import { test } from 'node:test'
import * as assert from 'node:assert'
import head from './head'

void test('head', (): void => {
  assert.equal(head([ 1, 2, 3 ]), 1, 'returns x')
})
