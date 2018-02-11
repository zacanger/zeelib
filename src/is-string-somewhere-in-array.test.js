// @flow

import test from 'tape'
import isStringSomewhereInArray from './is-string-somewhere-in-array'

test('isStringSomewhereInArray', (t): void => {
  t.true(isStringSomewhereInArray('a', [ 'asdf' ]), 'returns true for a and [ asdf ]')
  t.false(isStringSomewhereInArray('a', [ 'ghjkl' ]), 'returns false for a and ghjkl')
  t.end()
})
