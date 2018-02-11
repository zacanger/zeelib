// @flow

import test from 'tape'
import lines from './lines'

test('lines', (t): void => {
  t.deepEqual(lines('foo\nbar'), [ 'foo', 'bar' ], 'makes arr split on newline')
  t.end()
})
