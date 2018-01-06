// @flow

import test from 'tape'
import isOdd from './is-odd'

test('isOdd', (t): void => {
  t.true(isOdd(1), 'returns true for odd int')
  t.true(isOdd(1.1), 'returns true for odd float')
  t.false(isOdd(2), 'returns false for even int')
  t.end()
})
