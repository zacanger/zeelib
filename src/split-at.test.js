// @flow

import test from 'tape'
import splitAt from './split-at'

test('splitAt', (t): void => {
  t.deepEqual(splitAt(1, [ [ 'a', 'b' ], 'c' ]), [ [ [ 'a', 'b' ] ], [ 'c' ] ], 'works')
  t.end()
})
