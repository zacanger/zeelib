import { test } from 'node:test'
import * as assert from 'node:assert'
import sub from './sub'

void test('sub', (): void => {
  assert.equal(sub([ 4, 3, 2, 1 ]), -2, 'works')
})
