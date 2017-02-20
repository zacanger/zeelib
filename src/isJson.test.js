import test from 'tape'
import isJson from './isJson'

test('isJson', (t) => {
  t.plan(3)
  t.false(isJson({ a: 'a' }), 'returns false for obj')
  t.false(isJson('{"foo":"bar",baz:2}'), 'returns false for invalid JSON')
  t.true(isJson(JSON.stringify({ a: 'a' })), 'returns true for valid JSON')
})
