import test from 'tape'
import getMethodsOf from './get-methods-of'

test('getMethodsOf', (t) => {
  const o = {
    foo: () => true,
    bar () { return false },
    a: 'b',
    baz: function (whatever) { return whatever }
  }
  t.deepEqual(getMethodsOf(o), [ 'foo', 'bar', 'baz' ])
  t.end()
})
