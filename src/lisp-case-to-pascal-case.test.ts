import { test } from 'node:test'
import * as assert from 'node:assert'
import lispCaseToPascalCase from './lisp-case-to-pascal-case'

void test('lispCaseToPascalCase', (): void => {
  assert.equal(lispCaseToPascalCase('foo-bar'), 'FooBar', 'works')
})
