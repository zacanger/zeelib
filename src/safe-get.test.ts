import { test } from 'node:test'
import * as assert from 'node:assert'
import { safeGet } from './safe-get'

void test('safeGet', (): void => {
  const o = { a: { b: { c: 'd' } } }
  assert.equal(safeGet('a.b.c')(o), 'd', 'works')
  assert.equal(safeGet('a.b.e')(o), undefined, 'returns undefined if not there')
  assert.equal(safeGet('a.b.e', 'f')(o), 'f', 'returns fallback')
})
