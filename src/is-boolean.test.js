// @flow

import test from 'tape'
import isBoolean from './is-boolean'

test('isBoolean', (t): void => {
  t.false(isBoolean(1), 'returns false for 1')
  t.false(isBoolean(''), 'returns false for empty string')
  t.true(isBoolean(true), 'returns true for true')
  t.true(isBoolean(false), 'returns true for false')
  t.end()
})
