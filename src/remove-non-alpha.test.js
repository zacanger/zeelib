// @flow

import test from 'tape'
import removeNonAlpha from './remove-non-alpha'

test('removeNonAlpha', (t): void => {
  t.equal(removeNonAlpha('asdf 22 a'), 'asdf  a', 'works')
  t.end()
})
