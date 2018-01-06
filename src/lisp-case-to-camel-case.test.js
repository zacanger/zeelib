// @flow

import test from 'tape'
import lispCaseToCamelCase from './lisp-case-to-camel-case'

test('lispCaseToCamelCase', (t): void => {
  t.equal(lispCaseToCamelCase('foo-bar'), 'fooBar', 'works')
  t.end()
})
