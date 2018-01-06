// @flow

import test from 'tape'
import cdar from './cdar'

test('cdar', (t): void => {
  t.deepEqual(cdar([ [ 1, 2 ], 3 ]), [ 2 ], 'works')
  t.end()
})
