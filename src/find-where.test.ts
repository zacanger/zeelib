import { test } from 'node:test'
import * as assert from 'node:assert'
import findWhere from './find-where'

void test('findWhere', (): void => {
  const lessThanThree = (a: number): boolean => a < 3
  assert.equal(findWhere(lessThanThree, [ 1, 2, 3 ]), 1, 'finds where')
  assert.equal(findWhere(lessThanThree, [ 3, 2, 1 ]), 2, 'works')
  assert.equal(findWhere(lessThanThree, [ 3, 3, 3 ]), null, 'returns null if no match')
})
