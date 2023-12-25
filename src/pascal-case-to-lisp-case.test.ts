import { test } from 'node:test'
import * as assert from 'node:assert'
import pascalCaseToLispCase from './pascal-case-to-lisp-case'

void test('pascalCaseToLispCase', (): void => {
  assert.equal(pascalCaseToLispCase('FooBar'), 'foo-bar', 'works')
})
