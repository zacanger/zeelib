import { test } from 'node:test'
import * as assert from 'node:assert'
import { span } from './span'

void test('span', (): void => {
  const lessThanThree = (a: number): boolean => a < 3
  assert.deepEqual(span(lessThanThree, [ 1, 2, 3, 4 ]), [ [ 1, 2 ], [ 3, 4 ] ], 'works')
})
