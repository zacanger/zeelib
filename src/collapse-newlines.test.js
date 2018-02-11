// @flow

import test from 'tape'
import collapseNewlines from './collapse-newlines'

test('collapseNewlines', (t): void => {
  t.equal(collapseNewlines('\n\n\n\n'), '\n\n', 'works')
  t.end()
})
