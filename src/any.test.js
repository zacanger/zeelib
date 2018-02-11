// @flow

import test from 'tape'
import any from './any'

test('any', (t): void => {
  const lessThanThree = (a: number): bool => a < 3
  t.true(any(lessThanThree, [ 1, 2, 3 ]), 'returns true if any pass pred')
  t.false(any(lessThanThree, [ 4, 5, 6 ]), 'returns false if none pass pred')
  t.end()
})
