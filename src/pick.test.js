import test from 'tape'
import pick from './pick'

test('pick', (t): void => {
  t.deepEqual(pick('a', { a: 'a', b: 'b' }), { a: 'a' }, 'works for string arg')
  t.deepEqual(pick([ 'a', 'b' ], { a: 'a', b: 'b', c: 'c' }), { a: 'a', b: 'b' }, 'works for array arg')
  t.end()
})
