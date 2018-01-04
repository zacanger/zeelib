// @flow

import test from 'tape'
import reduce from './reduce'

test('reduce', (t): void => {
  t.equal(reduce((a, b) => a + b)(0)([ 1, 2, 3, 4 ]), 10, 'works')
  t.end()
})
