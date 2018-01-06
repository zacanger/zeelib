// @flow

import test from 'tape'
import uniq from './uniq'

test('uniq', (t): void => {
  t.deepEqual(uniq([ 1, 1, 2, 3 ]), [ 1, 2, 3 ], 'works')
  t.end()
})
