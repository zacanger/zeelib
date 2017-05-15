import test from 'tape'
import isPositive from './isPositive'

test('isPositive', (t) => {
  t.true(isPositive(1), 'returns true for positive number')
  t.false(isPositive(-1), 'returns false for negative number')
  t.end()
})
