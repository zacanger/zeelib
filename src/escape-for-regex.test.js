// @flow

import test from 'tape'
import escapeForRegex from './escape-for-regex'

test('escapeForRegex', (t): void => {
  t.equal(escapeForRegex(''), '', 'empty string')
  t.equal(escapeForRegex('1 \\ {} []|'), '1 \\\\ \\{\\} \\[\\]\\|', 'string with stuff')
  t.end()
})
