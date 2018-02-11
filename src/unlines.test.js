// @flow

import test from 'tape'
import unlines from './unlines'

test('unlines', (t): void => {
  t.equal(unlines([ 'foo', 'bar' ]), 'foo\nbar', 'makes string joined with newline')
  t.end()
})
