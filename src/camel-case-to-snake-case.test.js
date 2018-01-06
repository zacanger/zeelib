// @flow

import test from 'tape'
import camelCaseToSnakeCase from './camel-case-to-snake-case'

test('camelCaseToSnakeCase', (t): void => {
  t.equal(camelCaseToSnakeCase('fooBar'), 'foo_bar', 'works')
  t.end()
})
