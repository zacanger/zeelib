import { test } from 'node:test'
import * as assert from 'node:assert'
import { pair } from './pair'

void test('pair', (): void => {
  assert.deepEqual(pair('a', 'b'), [ 'a', 'b' ], 'puts things in a pair')
})
