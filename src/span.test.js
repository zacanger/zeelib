// @flow

import test from 'tape'
import span from './span'

test('span', (t): void => {
  const lessThanThree = (a: number) => a < 3
  t.deepEqual(span(lessThanThree, [ 1, 2, 3, 4 ]), [ [ 1, 2 ], [ 3, 4 ] ], 'works')
  t.end()
})
