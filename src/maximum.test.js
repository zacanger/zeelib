// @flow

import test from 'tape'
import maximum from './maximum'

test('maximum', (t): void => {
  t.equal(maximum([ 1, 2, 3, 4, 5 ]), 5, 'returns largest')
  t.end()
})
