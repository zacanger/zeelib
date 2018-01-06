// @flow

import test from 'tape'
import isBrowser from './is-browser'

test('isBrowser', (t): void => {
  t.false(isBrowser(), 'is false')
  t.end()
})
