// @flow

import test from 'tape'
import has from './has'

test('has', (t): void => {
  t.false(has('a', { b: 'c' }), 'returns false if object does not have prop')
  t.true(has('a', { a: 'b' }), 'returns true of object has prop')
  t.end()
})
