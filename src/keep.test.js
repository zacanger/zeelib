import test from 'tape'
import keep from './keep'

test('keep', (t) => {
  const withF = [ 'a', null, '', 2 ]
  const withoutF = [ 1, 2, 'a', 'b' ]
  const o = { a: '', b: null, c: 2 }
  t.deepEqual(keep(withF), [ 'a', 2 ], 'strips falsey values from array')
  t.deepEqual(keep(o), { c: 2 }, 'works for objects')
  t.deepEqual(keep(withoutF), withoutF, 'leaves all truthy values')
  t.end()
})
