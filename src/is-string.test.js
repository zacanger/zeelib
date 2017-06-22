import test from 'tape'
import isString from './is-string'

test('isString', (t) => {
  t.true(isString('asdf'), 'returns true for string')
  t.false(isString([]), 'returns false for non-string')
  t.end()
})
