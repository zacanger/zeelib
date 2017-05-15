import test from 'tape'
import safeGet from './safeGet'

test('safeGet', (t) => {
  const o = { a: { b: { c: 'd' } } }
  t.equal(safeGet(o, 'a.b.c'), 'd')
  t.equal(safeGet(o, 'a.b.e'), undefined)
  t.end()
})
