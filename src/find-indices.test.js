// @flow

import test from 'tape'
import findIndices from './find-indices'

test('findIndices', (t): void => {
  t.deepEqual(findIndices(1, [ 1, 2, 1 ]), [ 0, 2 ], 'works')
  t.end()
})
