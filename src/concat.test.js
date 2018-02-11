// @flow

import test from 'tape'
import concat from './concat'

test('concat', (t): void => {
  const nested = [ [ 1, 2, 3 ], [ [ 4, 5, 6 ] ] ]
  t.deepEqual(concat(nested), [ 1, 2, 3, [ 4, 5, 6 ] ], 'works')
  t.end()
})
