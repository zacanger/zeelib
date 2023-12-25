import { test } from 'node:test'
import * as assert from 'node:assert'
import camelCaseToSnakeCase from './camel-case-to-snake-case'

void test('camelCaseToSnakeCase', (): void => {
  assert.equal(camelCaseToSnakeCase('fooBar'), 'foo_bar', 'works')
})
