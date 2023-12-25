import { test } from 'node:test'
import * as assert from 'node:assert'
import collapseNewlines from './collapse-newlines'

void test('collapseNewlines', (): void => {
  assert.equal(collapseNewlines('\n\n\n\n'), '\n\n', 'works')
})
