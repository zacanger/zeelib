import { test } from 'node:test'
import * as assert from 'node:assert'
import foldl from './foldl'

void test('foldl', (): void => {
  const inc = (a: number): number => a + 1
  assert.equal(foldl(inc, 1, [ 1, 1, 1 ]), 4, 'works')
})
