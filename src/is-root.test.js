// @flow

import test from 'tape'
import isRoot from './is-root'

test('isRoot', (t): void => {
  t.false(isRoot(), 'is false')
  t.end()
})
