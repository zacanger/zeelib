// @flow

import test from 'tape'
import sortObject from './sort-object'

test('sortObject', (t): void => {
  const a = { b: 'b', c: 'c', a: 'a' }
  const b = { a: 'a', b: 'b', c: 'c' }
  t.deepEqual(sortObject(a), b, 'works')
  t.end()
})
