import { test } from 'node:test'
import * as assert from 'node:assert'
import { div } from './div'

void test('div', (): void => {
  assert.equal(div([ 4, 2, 1 ]), 2, 'works')
})
