// @flow

import test from 'tape'
import isAlphaNumeric from './is-alpha-numeric'

test('isAlphaNumeric', (t): void => {
  t.true(isAlphaNumeric('asdf1235'), 'returns true')
  t.false(isAlphaNumeric('!'), ' returns false')
  t.end()
})
