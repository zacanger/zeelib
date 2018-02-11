// @flow

import test from 'tape'
import isArray from './is-array'

test('isArray', (t): void => {
  t.true(isArray([]), 'returns true if array')
  t.false(isArray({}), 'returns false otherwise')
  t.end()
})
