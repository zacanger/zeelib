import { test } from 'node:test'
import * as assert from 'node:assert'
import foldl1 from './foldl1'

void test('foldl1', (): void => {
  const inc = (a: number): number => a + 1
  assert.equal(foldl1(inc, [ 1, 1, 1 ]), 3, 'works')
})
