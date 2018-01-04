// @flow

import test from 'tape'
import snakeCaseToCamelCase from './snake-case-to-camel-case'

test('snakeCaseToCamelCase', (t): void => {
  t.equal(snakeCaseToCamelCase('foo_bar'), 'fooBar', 'works')
  t.end()
})
