import { test } from 'node:test'
import * as assert from 'node:assert'
import { dropWhile } from './drop-while'

void test('dropWhile', (): void => {
  const f = (a: any): boolean => typeof a === 'number' && a < 10
  assert.deepEqual(dropWhile(f, [ 3, 6, 9, 12 ]), [ 12 ], 'drops while')
  assert.deepEqual(dropWhile(f, [ 1, 2, 3 ]), [], 'returns empty arr')
})
