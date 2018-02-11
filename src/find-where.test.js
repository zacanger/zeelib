// @flow

import test from 'tape'
import findWhere from './find-where'

test('findWhere', (t): void => {
  const lessThanThree = (a: number): bool => a < 3
  t.equal(findWhere(lessThanThree, [ 1, 2, 3 ]), 1, 'finds where')
  t.equal(findWhere(lessThanThree, [ 3, 2, 1 ]), 2, 'works')
  t.equal(findWhere(lessThanThree, [ 3, 3, 3 ]), null, 'returns null if no match')
  t.end()
})
