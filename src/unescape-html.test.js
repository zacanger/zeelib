// @flow

import test from 'tape'
import unescapeHtml from './unescape-html'
import escapeHtml from './escape-html'

test('unescapeHtml', (t): void => {
  const e = '<foo>&bar</foo>'
  t.equal(unescapeHtml(escapeHtml(e)), e, 'works')
  t.end()
})
