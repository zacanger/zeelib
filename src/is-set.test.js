// @flow

import test from 'tape'
import isSet from './is-set'

test('isSet', (t): void => {
  t.true(isSet(new Set()), 'returns true for set')
  t.false(isSet([]), 'returns false for non-set')
  t.end()
})
