// @flow

import test from 'tape'
import list from './list'

test('list', (t): void => {
  t.deepEqual(list(1, 2, 3), [ 1, 2, 3 ], 'works')
  t.end()
})
