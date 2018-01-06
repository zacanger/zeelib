// @flow

import test from 'tape'
import each from './each'
import id from './id'

test('each', (t): void => {
  const a = [ 'x', 'y', 'z' ]
  const o = { a: 'a', b: 'b', c: 'c' }
  t.is(each(), undefined, 'returns undefined with no args')
  t.is(each(a, id), 'x', 'returns first in passed arr with passed id fn')
  t.is(each(o, id), 'a', 'returns same with obj')
  t.end()
})
