import { test } from 'node:test'
import * as assert from 'node:assert'
import { pascalCaseToSnakeCase } from './pascal-case-to-snake-case'

void test('pascalCaseToSnakeCase', (): void => {
  assert.equal(pascalCaseToSnakeCase('FooBar'), 'foo_bar', 'works')
})
