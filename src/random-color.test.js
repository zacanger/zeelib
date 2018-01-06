// @flow

import test from 'tape'
import randomColor from './random-color'
import isHexBased from './is-hex-based'

test('randomColor', (t): void => {
  t.true(isHexBased(randomColor()), 'is a valid hex')
  t.end()
})
