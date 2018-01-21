// @flow

import test from 'tape'
import pipe from './pipe'

test('pipe', (t): void => {
  const addOne = (a: number): number => a + 1
  const timesTwo = (a: number): number => a * 2
  // $FlowFixMe
  t.equal(pipe(addOne, timesTwo)(2), 6, 'works')
  t.end()
})
