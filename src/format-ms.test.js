// @flow

import test from 'tape'
import formatMs from './format-ms'

test('formatMs', (t): void => {
  t.equal(formatMs(1000000000), '277:46:40', 'works')
  t.end()
})
