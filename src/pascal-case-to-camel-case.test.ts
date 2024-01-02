import { test } from 'node:test'
import * as assert from 'node:assert'
import { pascalCaseToCamelCase } from './pascal-case-to-camel-case'

void test('pascalCaseToCamelCase', (): void => {
  assert.equal(pascalCaseToCamelCase('FooBar'), 'fooBar', 'works')
})
