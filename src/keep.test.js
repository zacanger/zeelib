import test from 'tape'
import keep from './keep'

test('keep', (t) => {
  const withF = [ 'a', null, '', 2 ]
  const withoutF = [ 1, 2, 'a', 'b' ]
  t.deepEqual(keep(withF), [ 'a', 2 ], 'strips falsey values')
  t.deepEqual(keep(withoutF), withoutF, 'leaves all truthy values')
  t.end()
})
