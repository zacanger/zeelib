// @flow

import test from 'tape'
import isNode from './is-node'

test('isNode', (t): void => {
  t.true(isNode(), 'is true')
  t.end()
})
