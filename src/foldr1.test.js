// @flow

import test from 'tape'
import foldr1 from './foldr1'

test('foldr1', (t): void => {
  const inc = (a: number): number => a + 1
  t.equal(foldr1(inc, [ 1, 1, 1 ]), 3, 'works')
  t.end()
})
