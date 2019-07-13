import * as test from 'tape'
import id from './id'

test('id', (t): void => {
  t.deepEqual(id({ a: 'a' }), { a: 'a' }, 'is id fn')
  t.end()
})
