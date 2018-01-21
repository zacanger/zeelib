// @flow

import test from 'tape'
import foldl1 from './foldl1'

test('foldl1', (t): void => {
  const inc = (a: number): number => a + 1
  t.equal(foldl1(inc, [ 1, 1, 1 ]), 3, 'works')
  t.end()
})
