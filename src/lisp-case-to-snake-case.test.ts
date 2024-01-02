import { test } from 'node:test'
import * as assert from 'node:assert'
import { lispCaseToSnakeCase } from './lisp-case-to-snake-case'

void test('lispCaseToSnakeCase', (): void => {
  assert.equal(lispCaseToSnakeCase('foo-bar'), 'foo_bar', 'works')
})
