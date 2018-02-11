// @flow

import test from 'tape'
import isValidHex from './is-valid-hex'

test('isValidHex', (t): void => {
  t.true(isValidHex('fff'), 'returns true for fff')
  t.false(isValidHex('!'), 'returns false for !')
  t.end()
})
