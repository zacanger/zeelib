// @flow

import test from 'tape'
import flatten from './flatten'

test('flatten', (t): void => {
  t.deepEqual(flatten([ 1, 2, 3, [ 1, 2, 3 ] ]), [ 1, 2, 3, 1, 2, 3 ], 'works')
  t.end()
})
