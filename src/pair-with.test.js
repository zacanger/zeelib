// @flow

import test from 'tape'
import pairWith from './pair-with'

test('pairWith', (t): void => {
  const inc = (a: number): number => a + 1
  t.deepEqual(pairWith(inc, 1, 1), [ 2, 2 ], 'works')
  t.end()
})
