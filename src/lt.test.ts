import { test } from 'node:test'
import * as assert from 'node:assert'
import lt from './lt'

void test('lt', (): void => {
  assert.ok(!lt(2, 1), 'returns false for 2 and 1')
  assert.ok(lt(1.1, 1.9), 'returns true for 1.1 and 1.9')
})
