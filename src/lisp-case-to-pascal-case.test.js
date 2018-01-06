// @flow

import test from 'tape'
import lispCaseToPascalCase from './lisp-case-to-pascal-case'

test('lispCaseToPascalCase', (t): void => {
  t.equal(lispCaseToPascalCase('foo-bar'), 'FooBar', 'works')
  t.end()
})
