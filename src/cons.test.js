// @flow

import test from 'tape'
import cons from './cons'

test('cons', (t): void => {
  t.deepEqual(cons(1, [ 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'conses things')
  t.end()
})
