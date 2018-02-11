// @flow

import test from 'tape'
import and from './and'

test('and', (t): void => {
  t.true(and([ 1, 2, 3 ]), 'returns true if no false')
  t.false(and([ 1, 2, 3, false ]), 'returns false if one false')
  t.end()
})
