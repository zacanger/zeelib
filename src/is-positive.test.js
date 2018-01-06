// @flow

import test from 'tape'
import isPositive from './is-positive'

test('isPositive', (t): void => {
  t.true(isPositive(1), 'returns true for positive number')
  t.false(isPositive(-1), 'returns false for negative number')
  t.end()
})
