// @flow

import test from 'tape'
import pascalCaseToCamelCase from './pascal-case-to-camel-case'

test('pascalCaseToCamelCase', (t): void => {
  t.equal(pascalCaseToCamelCase('FooBar'), 'fooBar', 'works')
  t.end()
})
