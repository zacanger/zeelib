import { test } from 'node:test'
import * as assert from 'node:assert'
import isHiddenFile from './is-hidden-file'

void test('isHiddenFile', (): void => {
  assert.ok(!isHiddenFile('foo/bar'), 'path with slash')
  assert.ok(isHiddenFile('.foo/bar'), 'path with dot and slash')
})
