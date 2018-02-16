// @flow

import test from 'tape'
import constant from './constant'

test('constant', (t): void => {
  t.equal(constant(1)(), 1, 'works with function')
  t.equal(constant(1)(), 1, 'works with function')
  t.end()
})
