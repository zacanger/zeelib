// @flow

import test from 'tape'
import pair from './pair'

test('pair', (t): void => {
  t.deepEqual(pair('a', 'b'), [ 'a', 'b' ], 'puts things in a pair')
  t.end()
})
