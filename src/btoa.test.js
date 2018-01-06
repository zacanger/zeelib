// @flow

import test from 'tape'
import btoa from './btoa'

test('btoa', (t): void => {
  t.equal(btoa('asdf'), 'YXNkZg==', 'works')
  t.end()
})
