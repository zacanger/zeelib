import { test } from 'node:test'
import * as assert from 'node:assert'
import chunk from './chunk'

void test('chunk', (): void => {
  assert.deepEqual(chunk([ 1, 2, 3, 4 ], 2), [ [ 1, 2 ], [ 3, 4 ] ], 'works')
})
