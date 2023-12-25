import { test } from 'node:test'
import * as assert from 'node:assert'
import mzero from './mzero'

void test('mzero', (): void => {
  assert.equal(mzero('a'), '', 'string')
  assert.equal(mzero(1), 0, 'number')
  assert.deepEqual(mzero([ 1, 2 ]), [], 'array')
  assert.deepEqual(mzero({ a: 1 }), {}, 'object')
})
