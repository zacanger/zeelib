// @flow

import test from 'tape'
import isValidDate from './is-valid-date'

test('isValidDate', (t): void => {
  t.true(isValidDate(new Date()), 'returns true for new Date()')
  t.end()
})
