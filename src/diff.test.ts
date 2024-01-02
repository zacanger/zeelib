import { test } from 'node:test'
import * as assert from 'node:assert'
import { diff } from './diff'

void test('diff', (): void => {
  assert.deepEqual(diff([ 1, 2, 3 ], [ 2, 3 ]), [ 1 ], 'works')
})
