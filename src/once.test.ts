import { test } from 'node:test'
import * as assert from 'node:assert'
import once from './once'
import id from './id'

void test('once', (): void => {
  const o = once(id)
  assert.equal(o(1), 1, 'setup returns 1')
  assert.equal(o(), 1, 'still returns 1')
  assert.equal(o(2), 1, 'yep, still 1')
})
