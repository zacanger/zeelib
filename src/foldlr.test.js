// @flow

import test from 'tape'
import foldr from './foldr'

test('foldr', (t): void => {
  const inc = (a: number): number => a + 1
  t.equal(foldr(inc, 1, [ 1, 1, 1 ]), 4, 'works')
  t.end()
})
