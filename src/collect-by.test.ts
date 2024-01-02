import { test } from 'node:test'
import * as assert from 'node:assert'
import { collectBy } from './collect-by'

void test('collectBy', () => {
  const data = [ { foo: 'a', bar: 'baz' }, { foo: 'b', bar: 'quux' }, { foo: 'a', bar: 'whatever' } ]
  const expected = { a: { foo: 'a', bar: 'whatever' }, b: { foo: 'b', bar: 'quux' } }
  assert.deepEqual(collectBy('foo')(data), expected, 'works')
})
