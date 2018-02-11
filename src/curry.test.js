// @flow

import test from 'tape'
import curry from './curry'

test('curry', (t): void => {
  const a2 = (a: number, b: number): number => a + b
  const a4 = (a: number, b: number, c: number, d: number): number => a + b + c + d
  const ca2 = curry(a2)
  const ca4 = curry(a4)

  t.equal(ca2(1)(1), 2, 'works when called with 2 args')
  t.equal(ca4(1)(1)(1)(1), 4, 'works when called with 4 args')

  t.end()
})
