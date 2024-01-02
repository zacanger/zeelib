import { test } from 'node:test'
import * as assert from 'node:assert'
import { escapeForRegex } from './escape-for-regex'

void test('escapeForRegex', (): void => {
  assert.equal(escapeForRegex(''), '', 'empty string')
  assert.equal(escapeForRegex('1 \\ {} []|'), '1 \\\\ \\{\\} \\[\\]\\|', 'string with stuff')
})
