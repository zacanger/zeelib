import { test } from 'node:test'
import * as assert from 'node:assert'
import { clamp } from './clamp'

void test('clamp', (): void => {
  assert.equal(clamp(100, 0, 1000), 100, '100')
  assert.equal(clamp(100, 101, 1000), 101, '101')
  assert.equal(clamp(100, 0, 99), 99, '99')
})
