import test from 'tape'
import filter from './filter'

test('filter', (t) => {
  const ar = [ 'a', 'b' ]
  const fn = (a) => a
  const lessThanThree = (a) => a < 3
  t.deepEqual(filter(fn, ar), ar, 'returns arr also passed when passed id fn')
  t.deepEqual(filter(lessThanThree, [ 1, 2, 3, 4 ]), [ 1, 2 ], 'works with predicate')
  t.deepEqual(filter(lessThanThree, { a: 1, b: 4 }), { a: 1 }, 'works with predicate with object')
  t.is(typeof filter({}), 'object', 'returns obj when passed obj')
  t.end()
})
