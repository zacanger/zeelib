import test from 'tape'
import isOdd from './isOdd'

test('isOdd', (t) => {
  t.plan(4)
  t.true(isOdd(1), 'returns true for odd int')
  t.true(isOdd(1.1), 'returns true for odd float')
  t.false(isOdd(2), 'returns false for even int')
  t.false(isOdd({ a: 1 }), 'returns false for object')
})
