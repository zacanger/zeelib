import test from 'tape'
import compact from './compact'

test('compact', (t) => {
  const withF = [ 'a', null, '', 2 ]
  const withoutF = [ 1, 2, 'a', 'b' ]
  t.deepEqual(compact(withF), [ 'a', 2 ], 'strips falsey values')
  t.deepEqual(compact(withoutF), withoutF, 'leaves all truthy values')
  t.end()
})
