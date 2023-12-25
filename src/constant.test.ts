import { test } from 'node:test'
import * as assert from 'node:assert'
import constant from './constant'

void test('constant', (): void => {
  assert.equal(constant(1)(), 1, 'works with function')
  assert.equal(constant(1)(), 1, 'works with function')
})
