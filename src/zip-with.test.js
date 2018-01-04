// @flow

import test from 'tape'
import zipWith from './zip-with'

test('zipWith', (t): void => {
  const inc = (a) => a + 1
  t.deepEqual(zipWith(inc, [ 1, 1 ], [ 1, 1 ]), [ 2, 2 ], 'works')
  t.end()
})
