import test from 'tape'
import mix from './mix'

test('mix', (t) => {
  const m1 = { '0' : 'g', '1' : 'h', '2' : 'j', '3' : 'k', '4' : 'l' }
  const m2 = { a : 'a', b : 'b' }
  t.deepEqual(mix('asdf', 'ghjkl'), m1, 'mixes two strings into ojb')
  t.deepEqual(mix({ a : 'a' }, { b : 'b' }), m2, 'mixes two objs')
  t.end()
})
