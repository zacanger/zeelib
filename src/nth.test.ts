import { test } from 'node:test'
import * as assert from 'node:assert'
import nth from './nth'

void test('nth', (): void => {
  assert.equal(nth(1, [ 1, 2 ]), 2, 'works')
})
