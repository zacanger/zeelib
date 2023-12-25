import { test } from 'node:test'
import * as assert from 'node:assert'
import uniq from './uniq'

void test('uniq', (): void => {
  assert.deepEqual(uniq([ 1, 1, 2, 3 ]), [ 1, 2, 3 ], 'works')
})
