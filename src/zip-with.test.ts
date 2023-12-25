import { test } from 'node:test'
import * as assert from 'node:assert'
import zipWith from './zip-with'

void test('zipWith', (): void => {
  const inc = (a: number): number => a + 1
  assert.deepEqual(zipWith(inc, [ 1, 1 ], [ 1, 1 ]), [ 2, 2 ], 'works')
})
