// @flow

import test from 'tape'
import div from './div'

test('div', (t): void => {
  t.equal(div([ 4, 2, 1 ]), 2, 'works')
  t.end()
})
