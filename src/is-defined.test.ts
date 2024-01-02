import { test } from 'node:test'
import * as assert from 'node:assert'
import { isDefined } from './is-defined'

void test('isDefined', (): void => {
  let un
  const f = (): string => 'foo'
  const v = 'foo'
  assert.ok(!isDefined(un), 'returns false for undefined var')
  assert.ok(isDefined(v), 'returns true for defined var')
  assert.ok(isDefined(f()), 'returns true for fn that returns defined var')
})
