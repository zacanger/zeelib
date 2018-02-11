// @flow

import test from 'tape'
import diff from './diff'

test('diff', (t): void => {
  t.deepEqual(diff([ 1, 2, 3 ], [ 2, 3 ]), [ 1 ], 'works')
  t.end()
})
