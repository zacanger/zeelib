import { test } from 'node:test'
import * as assert from 'node:assert'
import keep from './keep'

void test('keep', (): void => {
  const withF = [ 'a', null, '', 2 ]
  const withoutF = [ 1, 2, 'a', 'b' ]
  const o = { a: '', b: null, c: 2 }
  assert.deepEqual(keep(withF), [ 'a', 2 ], 'strips falsey values from array')
  assert.deepEqual(keep(o), { c: 2 }, 'works for objects')
  assert.deepEqual(keep(withoutF), withoutF, 'leaves all truthy values')
})
