import { test } from 'node:test'
import * as assert from 'node:assert'
import { reduce } from './reduce'

void test('reduce', (): void => {
  assert.equal(reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]), 10, 'works')
})
