// @flow

import test from 'tape'
import dropWhile from './drop-while'

test('dropWhile', (t): void => {
  const f = (a: mixed): bool => typeof a === 'number' && a < 10
  t.deepEqual(dropWhile(f, [ 3, 6, 9, 12 ]), [ 12 ], 'drops while')
  t.end()
})
