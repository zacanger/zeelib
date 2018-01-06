// @flow

import test from 'tape'
import flip from './flip'

test('flip', (t): void => {
  const minus = (a: number, b: number): number => a - b
  t.equal(minus(2, 1), 1, 'setup test')
  t.equal(flip(minus)(2, 1), -1, 'works')
  t.end()
})
