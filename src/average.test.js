// @flow

import test from 'tape'
import average from './average'

test('average', (t): void => {
  t.equal(average([ 2, 4, 6, 8 ]), 5, 'works')
  t.end()
})
