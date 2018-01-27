// @flow

import test from 'tape'
import sub from './sub'

test('sub', (t): void => {
  t.equal(sub([ 4, 3, 2, 1 ]), -2, 'works')
  t.end()
})
