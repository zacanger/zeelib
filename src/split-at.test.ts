import { test } from 'node:test'
import * as assert from 'node:assert'
import { splitAt } from './split-at'

void test('splitAt', (): void => {
  assert.deepEqual(splitAt(1, [ [ 'a', 'b' ], 'c' ]), [ [ [ 'a', 'b' ] ], [ 'c' ] ], 'works')
})
