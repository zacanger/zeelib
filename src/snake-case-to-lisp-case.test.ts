import { test } from 'node:test'
import * as assert from 'node:assert'
import { snakeCaseToLispCase } from './snake-case-to-lisp-case'

void test('snakeCaseToLispCase', (): void => {
  assert.equal(snakeCaseToLispCase('foo_bar'), 'foo-bar', 'works')
})
