// @flow

import test from 'tape'
import compose from './compose'

test('compose', (t): void => {
  const addOne = (a: number): number => a + 1
  const timesTwo = (a: number): number => a * 2
  t.equal(compose(addOne, timesTwo)(2), 5, 'works')
  t.end()
})
