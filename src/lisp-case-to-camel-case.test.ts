import { test } from 'node:test'
import * as assert from 'node:assert'
import { lispCaseToCamelCase } from './lisp-case-to-camel-case'

void test('lispCaseToCamelCase', (): void => {
  assert.equal(lispCaseToCamelCase('foo-bar'), 'fooBar', 'works')
})
