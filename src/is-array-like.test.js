// @flow

import test from 'tape'
import isArrayLike from './is-array-like'

test('isArrayLike', (t): void => {
  const foo = (): number[] => [ 0, 1 ]
  t.false(isArrayLike({}), 'returns false for obj')
  t.true(isArrayLike([]), 'returns true for empty arr')
  t.true(isArrayLike(foo()), 'returns true for fn that returns arr')
  t.end()
})
