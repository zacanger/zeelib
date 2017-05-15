import test from 'tape'
import isInteger from './isInteger'

test('isInteger', (t) => {
  t.false(isInteger(2.2), 'returns false for float')
  t.false(isInteger('2'), 'returns false for string of int')
  t.false(isInteger([2]), 'returns false for array of int')
  t.true(isInteger(0), 'returns true for 0')
  t.true(isInteger(2), 'returns true for int')
  t.end()
})
