import { test } from 'node:test'
import * as assert from 'node:assert'
import init from './init'

void test('init', (): void => {
  assert.deepEqual(init([ 1, 2, 3 ]), [ 1, 2 ], 'returns all but last el of arr')
  assert.deepEqual(init([]), [], 'returns empty arr if passed empty arr')
})
