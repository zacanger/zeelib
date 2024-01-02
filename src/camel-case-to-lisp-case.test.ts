import { test } from 'node:test'
import * as assert from 'node:assert'
import { camelCaseToLispCase } from './camel-case-to-lisp-case'

void test('camelCaseToLispCase', (): void => {
  assert.equal(camelCaseToLispCase('fooBar'), 'foo-bar', 'works')
})
