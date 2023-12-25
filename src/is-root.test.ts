import { test } from 'node:test'
import * as assert from 'node:assert'
import isRoot from './is-root'

void test('isRoot', (): void => {
  assert.ok(!isRoot(), 'is false')
})
