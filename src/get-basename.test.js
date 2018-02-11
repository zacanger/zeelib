// @flow

import test from 'tape'
import getBasename from './get-basename'

test('getBasename', (t): void => {
  t.equal(getBasename('foo/bar'), 'bar', 'works')
  t.end()
})
