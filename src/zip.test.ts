import { test } from 'node:test'
import * as assert from 'node:assert'
import zip from './zip'

void test('zip', (): void => {
  assert.deepEqual(zip([ 1, 2 ], [ 3, 4 ]), [ [ 1, 3 ], [ 2, 4 ] ], 'works')
})
