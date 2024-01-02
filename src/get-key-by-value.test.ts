import { test } from 'node:test'
import * as assert from 'node:assert'
import { getKeyByValue } from './get-key-by-value'

void test('getKeyByValue', (): void => {
  assert.equal(getKeyByValue('bar', { foo: 'bar' }), 'foo', 'works')
  assert.equal(getKeyByValue('baz', { foo: 'bar' }), undefined, 'is undefined if no match')
})
