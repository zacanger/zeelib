import test from 'tape'
import id from './id'

test('id', (t) => {
  t.plan(1)
  t.deepEqual(id({ a: 'a' }), { a: 'a' }, 'is id fn')
})
