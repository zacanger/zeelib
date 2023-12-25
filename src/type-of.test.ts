import { test } from 'node:test'
import * as assert from 'node:assert'
import typeOf from './type-of'

void test('typeOf', (): void => {
  assert.equal(typeOf('a'), 'string', 'string')
  assert.equal(typeOf(2), 'number', 'number')
  assert.equal(typeOf([]), 'array', 'array')
  assert.equal(typeOf({}), 'object', 'object')
  assert.equal(typeOf(new Date()), 'date', 'date')
  assert.equal(typeOf(/foo/ig), 'regexp', 'regexp')
  assert.equal(typeOf(null), 'null', 'null')
  assert.equal(typeOf(new Map()), 'map', 'map')
  assert.equal(typeOf(new Set()), 'set', 'set')
})
