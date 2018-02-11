// @flow

import test from 'tape'
import eq from './eq'

test('eq', (t): void => {
  t.true(eq(1, 1), 'works for primitives')
  t.true(eq({ a: 'a' }, { a: 'a' }), 'works for objects')
  t.false(eq({ a: 'b' }, { b: 'a' }), 'returns false if not eq')
  t.end()
})
