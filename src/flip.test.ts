import { test } from 'node:test'
import * as assert from 'node:assert'
import flip from './flip'

void test('flip', (): void => {
  const minus = (a: number, b: number): number => a - b
  assert.equal(minus(2, 1), 1, 'setup test')
  assert.equal(flip(minus)(2, 1), -1, 'works')
})
