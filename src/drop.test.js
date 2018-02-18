// @flow

import test from 'tape'
import drop from './drop'

test('drop', (t): void => {
  t.deepEqual(drop(2, [ 1, 2, 3 ]), [ 3 ], 'works')
  t.deepEqual(drop(2, [ 0 ]), [], 'returns empty arr if n is greater than arr length')
  t.deepEqual(drop(0, [ 0 ]), [ 0 ], 'returns arr if n is less than 1')
  t.end()
})
