// @flow

import test from 'tape'
import until from './until'

test('until', (t): void => {
  const inc = (a: number): number => a + 1
  const equals5 = (a: number): bool => a === 5

  t.equal(until(equals5, inc)(2), 5, 'works')
  t.end()
})
