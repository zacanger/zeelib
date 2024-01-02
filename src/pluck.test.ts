import { test } from 'node:test'
import * as assert from 'node:assert'
import { pluck } from './pluck'

void test('pluck', (): void => {
  assert.deepEqual(pluck('a', [ { a: 'a', b: 'c' }, { a: 'b' } ]), [ 'a', 'b' ], 'works')
})
