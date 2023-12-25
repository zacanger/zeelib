import { test } from 'node:test'
import * as assert from 'node:assert'
import sortObject from './sort-object'

void test('sortObject', (): void => {
  const a = { b: 'b', c: 'c', a: 'a' }
  const b = { a: 'a', b: 'b', c: 'c' }
  assert.deepEqual(sortObject(a), b, 'works')
})
