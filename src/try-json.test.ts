import { test } from 'node:test'
import * as assert from 'node:assert'
import tryJson from './try-json'

void test('tryJson', (): void => {
  const goodInput = [ 1, 2, 3 ]
  const badInput = ']]]]]]]]][[[[[[23w3rs9cj8zc  clk slll;:cc'
  assert.deepEqual(tryJson(JSON.stringify(goodInput)), goodInput, 'good input')
  assert.equal(tryJson(badInput), badInput, 'bad input')
})
