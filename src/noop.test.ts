import { test } from 'node:test'
import * as assert from 'node:assert'
import noop from './noop'

void test('noop', (): void => {
  assert.equal(noop(), undefined, 'returns undefined')
})
