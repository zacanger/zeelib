// @flow

import test from 'tape'
import truncate from './truncate'

test('truncate', (t): void => {
  t.equal(truncate('asdf asdf asdf asdf', 4), 'asd…', 'works with default tail')
  t.equal(truncate('asdf asdf asdf asdf asdf', 8, ' etc.'), 'asd etc.', 'works with passed tail')
  t.end()
})
