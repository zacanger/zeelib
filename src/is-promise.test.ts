import { test } from 'node:test'
import * as assert from 'node:assert'
import isPromise from './is-promise'

void test('isPromise', (): void => {
  assert.ok(isPromise(Promise.resolve()), 'returns true for promise')
  assert.ok(!isPromise((): void => {}), 'returns false for non-promise')
})
