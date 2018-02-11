// @flow

import test from 'tape'
import toBoolInverse from './to-bool-inverse'

test('toBoolInverse', (t): void => {
  t.equal(toBoolInverse(1), false, 'works')
  t.end()
})
