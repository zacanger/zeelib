import { test } from 'node:test'
import * as assert from 'node:assert'
import { greater } from './greater'

void test('greater', (): void => {
  assert.equal(greater(1, 2), 2, 'works')
})
