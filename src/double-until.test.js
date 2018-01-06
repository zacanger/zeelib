// @flow

import test from 'tape'
import doubleUntil from './double-until'

test('doubleUntil', (t): void => {
  t.deepEqual(doubleUntil(2)([ 'hi' ]), [ 'hi', 'hi' ], 'works')
  t.end()
})
