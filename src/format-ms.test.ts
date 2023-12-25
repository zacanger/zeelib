import { test } from 'node:test'
import * as assert from 'node:assert'
import formatMs from './format-ms'

void test('formatMs', (): void => {
  assert.equal(formatMs(1000000000), '277:46:40', 'works')
})
