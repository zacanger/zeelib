// @flow

import test from 'tape'
import isInteger from './is-integer'

test('isInteger', (t): void => {
  const f = (): number => 2
  t.false(isInteger('2'), 'returns false for string')
  t.false(isInteger({ one: 2 }), 'returns false for obj')
  t.false(isInteger([ 2 ]), 'returns false for arr')
  t.true(isInteger(2), 'returns true for int')
  t.false(isInteger(2.22), 'returns false for float')
  t.true(isInteger(f()), 'returns true for fn that returns number')
  t.end()
})
