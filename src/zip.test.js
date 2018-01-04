// @flow

import test from 'tape'
import zip from './zip'

test('zip', (t): void => {
  t.deepEqual(zip([ 1, 2 ], [ 3, 4 ]), [ [ 1, 3 ], [ 2, 4 ] ], 'works')
  t.end()
})
