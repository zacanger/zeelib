// @flow

import test from 'tape'
import isArray from './is-array'

test('isArray', (t): void => {
  t.true(isArray([]), 'returns true if array')
  t.false(isArray({}), 'returns false otherwise')
  const old = Array.isArray
  // $FlowFixMe
  Array.isArray = null
  t.false(isArray(1), 'works (false) without Array.isArray')
  t.true(isArray([]), 'works (true) without Array.isArray')
  // $FlowFixMe
  Array.isArray = old
  t.end()
})
