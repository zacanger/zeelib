// @flow

import test from 'tape'
import typeOf from './type-of'

test('typeOf', (t): void => {
  t.equal(typeOf('a'), 'string', 'string')
  t.equal(typeOf(2), 'number', 'number')
  t.equal(typeOf([]), 'array', 'array')
  t.equal(typeOf({}), 'object', 'object')
  t.equal(typeOf(new Date()), 'date', 'date')
  t.equal(typeOf(/foo/ig), 'regexp', 'regexp')
  t.equal(typeOf(null), 'null', 'null')
  t.end()
})
