// @flow

import test from 'tape'
import drop from './drop'

test('drop', (t): void => {
  t.deepEqual(drop(2, [ 1, 2, 3 ]), [ 3 ], 'works')
  t.end()
})
