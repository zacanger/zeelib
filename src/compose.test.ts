import { test } from 'node:test'
import * as assert from 'node:assert'
import compose from './compose'

void test('compose', (): void => {
  const addOne = (a: number): number => a + 1
  const timesTwo = (a: number): number => a * 2
  assert.equal(compose(addOne, timesTwo)(2), 5, 'works')
})
