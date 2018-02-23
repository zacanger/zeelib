// @flow

import test from 'tape'
import clamp from './clamp'

test('clamp', (t): void => {
  t.equal(clamp(100, 0, 1000), 100, '100')
  t.equal(clamp(100, 101, 1000), 101, '101')
  t.equal(clamp(100, 0, 99), 99, '99')
  t.end()
})
