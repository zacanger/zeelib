// @flow

import test from 'tape'
import slice from './slice'

test('slice', (t): void => {
  t.deepEqual(slice([ 1, 2, 3 ], 1, 2), [ 2 ], 'works')
  t.deepEqual(slice([ 1, 2, 3 ], 1), [ 2 ], 'works with default last param')
  t.end()
})
