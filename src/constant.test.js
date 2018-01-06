// @flow

import test from 'tape'
import constant from './constant'
import noop from './noop'

test('constant', (t): void => {
  t.equal(constant(1)(noop), 1, 'works with function')
  t.equal(constant(1)(2), 1, 'works with function')
  t.end()
})
