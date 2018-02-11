// @flow

import test from 'tape'
import flattenAndUniq from './flatten-and-uniq'

test('flattenAndUniq', (t): void => {
  t.deepEqual(flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ] ]), [ 1, 2, 3 ], 'works')
  t.end()
})
