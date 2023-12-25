import { test } from 'node:test'
import * as assert from 'node:assert'
import unless from './unless'

void test('unless', (): void => {
  assert.ok(unless(false, () => true), 'returns fn for false')
  assert.ok(!unless(true, () => true), 'returns null for true')
})
