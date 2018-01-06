// @flow

import test from 'tape'
import camelCaseToLispCase from './camel-case-to-lisp-case'

test('camelCaseToLispCase', (t): void => {
  t.equal(camelCaseToLispCase('fooBar'), 'foo-bar', 'works')
  t.end()
})
