import { test } from 'node:test'
import * as assert from 'node:assert'
import { camelCaseToPascalCase } from './camel-case-to-pascal-case'

void test('camelCaseToPascalCase', (): void => {
  assert.equal(camelCaseToPascalCase('fooBar'), 'FooBar', 'works')
})
