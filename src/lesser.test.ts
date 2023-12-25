import { test } from 'node:test'
import * as assert from 'node:assert'
import lesser from './lesser'

void test('lesser', (): void => {
  assert.equal(lesser(1, 2), 1, 'works')
})
