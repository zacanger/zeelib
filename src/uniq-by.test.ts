import { test } from 'node:test'
import * as assert from 'node:assert'
import { uniqBy } from './uniq-by'

void test('uniqBy', (): void => {
  const a = [ { foo: 'bar' }, { foo: 'bar' }, { foo: 'foo' } ]
  const e = [ { foo: 'bar' }, { foo: 'foo' } ]
  assert.deepEqual(uniqBy('foo', a), e, 'works')
})
