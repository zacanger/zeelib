import { test } from 'node:test'
import * as assert from 'node:assert'
import { countIn } from './count-in'

void test('countIn', (): void => {
  assert.equal(countIn('a', 'abc'), 1, 'works for string')
  assert.equal(countIn('a', [ 'a', 'b', 'c' ]), 1, 'works for array')
})
