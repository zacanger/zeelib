import test from 'tape'
import pascalCaseToSnakeCase from './pascal-case-to-snake-case'

test.skip('pascalCaseToSnakeCase', (t) => {
  t.equal(pascalCaseToSnakeCase('FooBar'), 'foo_bar', 'works')
  t.end()
})
