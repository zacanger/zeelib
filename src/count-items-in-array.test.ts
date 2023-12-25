import { test } from 'node:test'
import * as assert from 'node:assert'
import countItemsInArray from './count-items-in-array'

void test('countItemsInArray', (): void => {
  assert.deepEqual(countItemsInArray([ 1, 1, 2, 3, 4 ]), { 1: 2, 2: 1, 3: 1, 4: 1 }, 'works')
})
