import test from 'tape'
import lispCaseToPascalCase from './lisp-case-to-pascal-case'

test('lispCaseToPascalCase', (t) => {
  t.equal(lispCaseToPascalCase('foo-bar'), 'FooBar', 'works')
  t.end()
})
