// @flow

import test from 'tape'
import lispCaseToSnakeCase from './lisp-case-to-snake-case'

test('lispCaseToSnakeCase', (t): void => {
  t.equal(lispCaseToSnakeCase('foo-bar'), 'foo_bar', 'works')
  t.end()
})
