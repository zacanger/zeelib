import { test } from 'node:test'
import * as assert from 'node:assert'
import { doubleUntil } from './double-until'

void test('doubleUntil', (): void => {
  assert.deepEqual(doubleUntil(2)([ 'hi' ]), [ 'hi', 'hi' ], 'works')
})
