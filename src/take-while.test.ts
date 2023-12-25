import { test } from 'node:test'
import * as assert from 'node:assert'
import takeWhile from './take-while'

void test('takeWhile', (): void => {
  const lt3 = (a: number): boolean => a < 3
  assert.deepEqual(takeWhile(lt3, [ 1, 2, 3, 2, 1 ]), [ 1, 2 ], 'works')
})
