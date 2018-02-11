// @flow

import test from 'tape'
import uncurry from './uncurry'

test('uncurry', (t): void => {
  const ac2 = (a: number) => (b: number): number => a + b
  const ac4 = (a: number) => (b: number) => (c: number) => (d: number): number => a + b + c + d
  t.equal(uncurry(ac2)(1, 2), 3, 'works for two')
  t.equal(uncurry(ac4)(1, 2, 3, 4), 10, 'works for ten')
  t.end()
})
