// @flow

import test from 'tape'
import apply from './apply'

test('apply', (t): void => {
  const lessthanThree = (a: number): bool => a < 3
  t.true(apply(lessthanThree, 1), 'works')
  t.end()
})
