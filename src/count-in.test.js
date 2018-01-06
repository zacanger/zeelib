// @flow

import test from 'tape'
import countIn from './count-in'

test('countIn', (t): void => {
  t.equal(countIn('a', 'abc'), 1, 'works for string')
  t.equal(countIn('a', [ 'a', 'b', 'c' ]), 1, 'works for array')
  t.end()
})
