import test from 'tape'
import camelCaseToPascalCase from './camel-case-to-pascal-case'

test('camelCaseToPascalCase', (t) => {
  t.equal(camelCaseToPascalCase('fooBar'), 'FooBar', 'works')
  t.end()
})
