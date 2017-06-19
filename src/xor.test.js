import test from 'tape'
import xor from './xor'

test('xor', (t) => {
  t.false(xor(1, 1), 'false for 1 and 1')
  t.true(xor(1, !1), 'true for 1 and !1')
  t.end()
})
