// @flow

import test from 'tape'
import isBetween from './is-between'

test('isBetween', (t): void => {
  t.true(isBetween(1, 3, 2), 'returns true for 1, 3, and 2')
  t.true(isBetween(3, 1, 2), 'returns true for 3, 1, and 2')
  t.false(isBetween(2, 1, 2), 'returns false for 2, 1, and 2')
  t.end()
})
