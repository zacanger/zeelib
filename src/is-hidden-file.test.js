// @flow

import test from 'tape'
import isHiddenFile from './is-hidden-file'

test('isHiddenFile', (t): void => {
  t.false(isHiddenFile('foo/bar'), 'path with slash')
  t.true(isHiddenFile('.foo/bar'), 'path with dot and slash')
  t.end()
})
