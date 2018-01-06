// @flow

import test from 'tape'
import all from './all'

test('all', (t): void => {
  const lessThanThree = (a: number): bool => a < 3
  t.true(all(lessThanThree, [ 1, 2 ], 'works'))
  t.false(all(lessThanThree)([ 1, 2, 3 ]), 'works curried')
  t.end()
})
