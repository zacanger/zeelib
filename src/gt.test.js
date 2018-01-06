// @flow

import test from 'tape'
import gt from './gt'

test('gt', (t): void => {
  t.true(gt(2, 1), 'returns true for 2 and 1')
  t.false(gt(1.1, 1.9), 'returns false for 1.1 and 1.9')
  t.end()
})
