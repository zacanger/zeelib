// @flow

import test from 'tape'
import groupBy from './group-by'

test('groupBy', (t): void => {
  const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
  const expected = { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
  t.deepEqual(groupBy('foo')(data), expected, 'works')
  t.end()
})
