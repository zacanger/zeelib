// @flow

import test from 'tape'
import foldl from './foldl'

test('foldl', (t): void => {
  const inc = (a: number): number => a + 1
  t.equal(foldl(inc, 1, [ 1, 1, 1 ]), 4, 'works')
  t.end()
})
