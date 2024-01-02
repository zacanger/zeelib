import { test } from 'node:test'
import * as assert from 'node:assert'
import { fold } from './fold'

void test('fold', (): void => {
  const inc = (a: number): number => a + 1
  assert.equal(fold(inc, [ 1, 1, 1 ]), 3, 'works')
})
