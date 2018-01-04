// @flow

import test from 'tape'
import snakeCaseToLispCase from './snake-case-to-lisp-case'

test('snakeCaseToLispCase', (t): void => {
  t.equal(snakeCaseToLispCase('foo_bar'), 'foo-bar', 'works')
  t.end()
})
