// @flow

import test from 'tape'
import getRelativePath from './get-relative-path'

test('getRelativePath', (t): void => {
  t.equal(getRelativePath('/home/z/', '/'), '../..', 'works')
  t.end()
})
