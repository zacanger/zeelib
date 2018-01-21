// @flow

import test from 'tape'
import minimum from './minimum'

test('minimum', (t): void => {
  t.equal(minimum([ 1, 2, 3, 4, 5 ]), 1, 'returns smallest')
  t.end()
})
