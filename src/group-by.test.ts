import { test } from 'node:test'
import * as assert from 'node:assert'
import groupBy from './group-by'

void test('groupBy', (): void => {
  const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
  const expected = { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
  assert.deepEqual(groupBy('foo')(data), expected, 'works')
})
