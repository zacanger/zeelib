import { test } from 'node:test'
import * as assert from 'node:assert'
import { findIndices } from './find-indices'

void test('findIndices', (): void => {
  assert.deepEqual(findIndices(1, [ 1, 2, 1 ]), [ 0, 2 ], 'works')
})
