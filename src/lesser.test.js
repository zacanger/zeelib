// @flow

import test from 'tape'
import lesser from './lesser'

test('lesser', (t): void => {
  t.equal(lesser(1, 2), 1, 'works')
  t.end()
})
