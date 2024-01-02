import { test } from 'node:test'
import * as assert from 'node:assert'
import { objectToString } from './object-to-string'

void test('objectToString', (): void => {
  assert.equal(objectToString({}), '[object Object]', 'works')
})
