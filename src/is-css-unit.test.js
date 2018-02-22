// @flow

import test from 'tape'
import isCssUnit from './is-css-unit'

test('isCssUnit', (t): void => {
  t.true(isCssUnit('100px'), 'true for 100px')
  t.true(isCssUnit('auto'), 'true for auto')
  t.true(isCssUnit(0), 'true for number 0')
  t.false(isCssUnit('90'), 'false for string 90')
  t.false(isCssUnit(90), 'false for 90')
  t.end()
})
