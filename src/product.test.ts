import { test } from 'node:test'
import * as assert from 'node:assert'
import { product } from './product'

void test('product', (): void => {
  assert.equal(product([ 1, 2, 3, 4 ]), 24, 'on array of ints')
  assert.equal(product([ 1.1, 2.2, 3.3, 4.4 ]), 35.138400000000004, 'on array of floats')
})
