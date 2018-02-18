// @flow

import test from 'tape'
import takeLast from './take-last'

test('takeLast', (t): void => {
  t.deepEqual(takeLast(2, [ 1, 2, 3, 4 ]), [ 3, 4 ], 'works')
  t.deepEqual(takeLast(2, [ 0 ]), [ 0 ], 'returns arr if n is more than arr length')
  t.end()
})
