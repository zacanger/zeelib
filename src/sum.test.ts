import { test } from 'node:test'
import * as assert from 'node:assert'
import sum from './sum'

void test('sum', (): void => {
  assert.equal(sum([ 1, 2, 3, 4 ]), 10, 'sums array of ints')
  assert.equal(sum([ 1.1, 2.2, 3.3, 4.4 ]), 11, 'sums array of floats')
})
