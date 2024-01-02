import { test } from 'node:test'
import * as assert from 'node:assert'
import { replicate } from './replicate'

void test('replicate', (): void => {
  assert.deepEqual(replicate(4, 1), [ 1, 1, 1, 1 ], 'works for simple elements')
  assert.deepEqual(replicate(4, (a) => a + 1), [ 5, 5, 5, 5 ], 'works with function')
})
