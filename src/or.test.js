// @flow

import test from 'tape'
import or from './or'

test('or', (t): void => {
  t.true(or([ 1, 2, 3, true ]), 'works')
  t.false(or([ 1, 2, 3 ]), 'returns false if none in array is true')
  t.end()
})
