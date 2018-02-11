// @flow

import test from 'tape'
import safeGet from './safe-get'

test('safeGet', (t): void => {
  const o = { a: { b: { c: 'd' } } }
  t.equal(safeGet('a.b.c')(o), 'd', 'works')
  t.equal(safeGet('a.b.e')(o), undefined, 'returns undefined if not there')
  t.equal(safeGet('a.b.e', 'f')(o), 'f', 'returns fallback')
  t.end()
})
