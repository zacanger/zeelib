import { test } from 'node:test'
import * as assert from 'node:assert'
import { capitalizeFirstChar } from './capitalize-first-char'

void test('capitalizeFirstChar', (): void => {
  assert.equal(capitalizeFirstChar('things and stuff'), 'Things and stuff', 'works')
})
