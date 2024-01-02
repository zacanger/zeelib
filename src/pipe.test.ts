import { test } from 'node:test'
import * as assert from 'node:assert'
import { pipe } from './pipe'

void test('pipe', (): void => {
  const addOne = (a: number): number => a + 1
  const timesTwo = (a: number): number => a * 2
  assert.equal(pipe(addOne, timesTwo)(2), 6, 'works')
})
