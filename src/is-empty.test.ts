import { test } from 'node:test'
import * as assert from 'node:assert'
import isEmpty from './is-empty'

void test('isEmpty', (): void => {
  assert.ok(isEmpty(0), 'number empty')
  assert.ok(!isEmpty(1), 'number not empty')
  assert.ok(isEmpty({}), 'object empty')
  assert.ok(!isEmpty({ a: 1 }), 'object not empty')
})
