// @flow

import test from 'tape'
import hasDuplicate from './has-duplicate'

test('hasDuplicate', (t): void => {
  t.true(hasDuplicate([ 1, 1, 2 ]), 'returns true if duplicates')
  t.false(hasDuplicate([ 1, 2, 3 ]), 'returns false if no duplicates')
  t.end()
})
