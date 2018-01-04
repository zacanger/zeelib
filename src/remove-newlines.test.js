// @flow

import test from 'tape'
import removeNewlines from './remove-newlines'

test('removeNewlines', (t): void => {
  t.equal(removeNewlines('\n\na\n\n'), 'a', 'works')
  t.end()
})
