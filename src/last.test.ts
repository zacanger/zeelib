import { test } from 'node:test'
import * as assert from 'node:assert'
import last from './last'

void test('last', (): void => {
  assert.equal(last([ 1, 2, 3 ]), 3, 'returns last el of arr')
})
