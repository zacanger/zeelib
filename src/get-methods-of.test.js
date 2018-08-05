// @flow

import test from 'tape'
import getMethodsOf from './get-methods-of'

test('getMethodsOf', (t): void => {
  const o = {
    foo: () => true,
    bar (): bool { return false },
    a: 'b',
    baz: function <T> (whatever: T): T { return whatever }
  }
  t.deepEqual(getMethodsOf(o), [ 'foo', 'bar', 'baz' ])
  t.end()
})
