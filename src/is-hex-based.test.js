// @flow

import test from 'tape'
import isHexBased from './is-hex-based'
import randomColor from './random-color'

test('isHexBased', (t): void => {
  t.true(isHexBased(randomColor()), 'returns true for valid hex')
  t.true(isHexBased('#333'), 'returns true for short hex')
  t.false(isHexBased('1'), 'returns false for 1')
  t.end()
})
