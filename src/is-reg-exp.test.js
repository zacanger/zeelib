import test from 'tape'
import isRegExp from './is-reg-exp'

test('isRegExp', (t) => {
  t.true(isRegExp(/a/), 'returns true for regexp')
  t.false(isRegExp('a'), 'returns false for non-regexp')
  t.end()
})
