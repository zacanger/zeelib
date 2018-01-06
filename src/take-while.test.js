// @flow

import test from 'tape'
import takeWhile from './take-while'

test('takeWhile', (t): void => {
  const lt3 = (a) => a < 3
  t.deepEqual(takeWhile(lt3, [ 1, 2, 3, 2, 1 ]), [ 1, 2 ], 'works')
  t.end()
})
