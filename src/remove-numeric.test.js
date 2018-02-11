// @flow

import test from 'tape'
import removeNumeric from './remove-numeric'

test('removeNumeric', (t): void => {
  t.equal(removeNumeric('123abc'), 'abc', 'removes numbers')
  t.end()
})
