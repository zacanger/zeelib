// @flow

import test from 'tape'
import unzip from './unzip'

test('unzip', (t): void => {
  const expected = [ [ 1, 2 ], [ 1, 2 ] ]
  t.deepEqual(unzip([ [ 1, 1 ], [ 2, 2 ] ]), expected, 'works')
  t.end()
})
