import { test } from 'node:test'
import * as assert from 'node:assert'
import { flattenAndUniq } from './flatten-and-uniq'

void test('flattenAndUniq', (): void => {
  assert.deepEqual(flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ] ]), [ 1, 2, 3 ], 'works')
})
