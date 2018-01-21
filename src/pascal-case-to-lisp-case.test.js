// @flow

import test from 'tape'
import pascalCaseToLispCase from './pascal-case-to-lisp-case'

test('pascalCaseToLispCase', (t): void => {
  t.equal(pascalCaseToLispCase('FooBar'), 'foo-bar', 'works')
  t.end()
})
