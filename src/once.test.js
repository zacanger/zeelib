import test from 'tape'
import once from './once'
import id from './id'

test('once', (t) => {
  const o = once(id)
  t.equal(o(1), 1, 'setup returns 1')
  t.equal(o(), 1, 'still returns 1')
  t.equal(o(2), 1, 'yep, still 1')
  t.end()
})
