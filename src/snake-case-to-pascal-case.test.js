// @flow

import test from 'tape'
import snakeCaseToPascalCase from './snake-case-to-pascal-case'

test('snakeCaseToPascalCase', (t): void => {
  t.equal(snakeCaseToPascalCase('foo_bar'), 'FooBar', 'works')
  t.end()
})
