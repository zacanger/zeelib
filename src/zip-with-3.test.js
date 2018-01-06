// @flow

import test from 'tape'
import zipWith3 from './zip-with-3'

test('zipWith3', (t): void => {
  const inc = (a) => a + 1
  t.deepEqual(zipWith3(inc, [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ]), [ 2, 2, 2 ], 'works')
  t.end()
})
