import { test } from 'node:test'
import * as assert from 'node:assert'
import isNode from './is-node'

void test('isNode', (): void => {
  assert.ok(isNode(), 'is true')
})
