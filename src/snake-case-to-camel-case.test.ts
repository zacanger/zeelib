import { test } from 'node:test'
import * as assert from 'node:assert'
import { snakeCaseToCamelCase } from './snake-case-to-camel-case'

void test('snakeCaseToCamelCase', (): void => {
  assert.equal(snakeCaseToCamelCase('foo_bar'), 'fooBar', 'works')
})
