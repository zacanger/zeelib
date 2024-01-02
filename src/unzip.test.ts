import { test } from 'node:test'
import * as assert from 'node:assert'
import { unzip } from './unzip'

void test('unzip', (): void => {
  const expected = [ [ 1, 2 ], [ 1, 2 ] ]
  assert.deepEqual(unzip([ [ 1, 1 ], [ 2, 2 ] ]), expected, 'works')
})
