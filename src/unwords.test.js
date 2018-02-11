// @flow

import test from 'tape'
import unwords from './unwords'

test('unwords', (t): void => {
  t.equal(unwords([ 'foo', 'bar' ]), 'foo bar', 'makes string joined with space')
  t.end()
})
