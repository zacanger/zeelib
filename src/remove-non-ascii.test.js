// @flow

import test from 'tape'
import removeNonAscii from './remove-non-ascii'

test('removeNonAscii', (t): void => {
  t.equal(removeNonAscii('asdf!!\n\r\t\ns'), 'asdf!!s', 'works')
  t.end()
})
