// @flow

import test from 'tape'
import cdr from './cdr'

test('cdr', (t): void => {
  t.deepEqual(cdr([ 1, 2, 3, 4 ]), [ 2, 3, 4 ], 'returns xs')
  t.end()
})
