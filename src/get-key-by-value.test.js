// @flow

import test from 'tape'
import getKeyByValue from './get-key-by-value'

test('getKeyByValue', (t): void => {
  t.equal(getKeyByValue('bar', { foo: 'bar' }), 'foo', 'works')
  t.equal(getKeyByValue('baz', { foo: 'bar' }), undefined, 'is undefined if no match')
  t.end()
})
