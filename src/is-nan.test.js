// @flow

import test from 'tape'
import isNan from './is-nan'

test('isNan', (t): void => {
  t.false(isNan(1), 'returns false for not NaN')
  t.true(isNan(NaN), 'returns true for NaN')
  t.end()
})
