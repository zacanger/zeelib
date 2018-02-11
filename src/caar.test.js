// @flow

import test from 'tape'
import caar from './caar'

test('caar', (t): void => {
  t.equal(caar([ [ 1 ] ]), 1, 'works')
  t.end()
})
