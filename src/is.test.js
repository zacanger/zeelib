// @flow

import test from 'tape'
import is from './is'

test('is', (t): void => {
  t.true(is('number', 2), 'returns true for number and 2')
  t.false(is('number', 'a'), 'returns false for number and string')
  t.end()
})
