import test from 'tape'
import pascalCaseToCamelCase from './pascal-case-to-camel-case'

test('pascalCaseToCamelCase', (t) => {
  t.equal(pascalCaseToCamelCase('FooBar'), 'fooBar', 'works')
  t.end()
})
