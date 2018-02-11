// @flow

import test from 'tape'
import isDefined from './is-defined'

test('isDefined', (t): void => {
  let un: void
  const f = (): string => 'foo'
  const v = 'foo'
  t.false(isDefined(un), 'returns false for undefined var')
  t.true(isDefined(v), 'returns true for defined var')
  t.true(isDefined(f()), 'returns true for fn that returns defined var')
  t.end()
})
