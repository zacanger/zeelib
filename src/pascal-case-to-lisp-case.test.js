import test from 'tape'
import pascalCaseToLispCase from './pascal-case-to-lisp-case'

test.skip('pascalCaseToLispCase', (t) => {
  t.equal(pascalCaseToLispCase('FooBar'), 'foo-bar', 'works')
  t.end()
})
