import { test } from 'node:test'
import * as assert from 'node:assert'
import { pairWith } from './pair-with'

void test('pairWith', (): void => {
  const inc = (a: number): number => a + 1
  assert.deepEqual(pairWith(inc, 1, 1), [ 2, 2 ], 'works')
})
