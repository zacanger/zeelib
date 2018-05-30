// @flow

import test from 'tape'
import words from './words'

test('words', (t): void => {
  t.deepEqual(words('foo bar'), [ 'foo', 'bar' ], 'makes arr split on space')
  t.deepEqual(words(''), [], 'returns an empty array for an empty string')
  t.end()
})
