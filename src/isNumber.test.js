import test from 'tape'
import isNumber from './isNumber'

test('isNumber', (t) => {
  const f = () => 2
  t.false(isNumber('2'), 'returns false for string')
  t.false(isNumber({ one: 2 }), 'returns false for obj')
  t.false(isNumber([2]), 'returns false for arr')
  t.true(isNumber(2), 'returns true for int')
  t.true(isNumber(2.22), 'returns true for float')
  t.true(isNumber(f()), 'returns true for fn that returns number')
  t.end()
})
