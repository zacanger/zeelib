// @flow

import test from 'tape'
import camelCaseToPascalCase from './camel-case-to-pascal-case'

test('camelCaseToPascalCase', (t): void => {
  t.equal(camelCaseToPascalCase('fooBar'), 'FooBar', 'works')
  t.end()
})
