// @flow

import test from 'tape'
import uniqBy from './uniq-by'

test('uniqBy', (t): void => {
  const a = [ { foo: 'bar' }, { foo: 'bar' }, { foo: 'foo' } ]
  const e = [ { foo: 'bar' }, { foo: 'foo' } ]
  t.deepEqual(uniqBy('foo', a), e, 'works')
  t.end()
})
