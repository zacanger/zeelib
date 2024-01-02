import { test } from 'node:test'
import * as assert from 'node:assert'
import { each } from './each'

void test('each', (): void => {
  const doubleString = (s: string): string => s + s
  const a = [ 'x', 'y', 'z' ]
  const o = { a: 'a', b: 'b', c: 'c' }
  assert.deepEqual(each(a, doubleString), [ 'xx', 'yy', 'zz' ], 'returns first in passed arr with passed id fn')
  assert.deepEqual(each(o, doubleString), { a: 'aa', b: 'bb', c: 'cc' }, 'returns same with obj')
})
