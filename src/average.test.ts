import { test } from 'node:test'
import * as assert from 'node:assert'
import average from './average'

void test('average', (): void => {
  assert.equal(average([ 2, 4, 6, 8 ]), 5, 'works')
})
