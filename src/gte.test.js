// @flow

import test from 'tape'
import gte from './gte'

test('gte', (t): void => {
  t.true(gte(2, 1), 'returns true for 2 and 1')
  t.false(gte(1.1, 1.9), 'returns false for 1.1 and 1.9')
  t.true(gte(1, 1), 'returns true for 1 and 1')
  t.end()
})
