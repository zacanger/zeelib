import { test } from 'node:test'
import * as assert from 'node:assert'
import { snakeCaseToPascalCase } from './snake-case-to-pascal-case'

void test('snakeCaseToPascalCase', (): void => {
  assert.equal(snakeCaseToPascalCase('foo_bar'), 'FooBar', 'works')
})
