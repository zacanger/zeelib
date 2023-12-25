import { test } from 'node:test'
import * as assert from 'node:assert'
import tail from './tail'

void test('tail', (): void => {
  assert.deepEqual(tail([ 1, 2, 3, 4 ]), [ 2, 3, 4 ], 'returns xs')
})
