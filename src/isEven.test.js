import test from 'tape'
import isEven from './isEven'

test('isEven', (t) => {
  t.plan(4)
  t.false(isEven(1), 'returns false for odd int')
  t.false(isEven(1.1), 'returns false for odd float')
  t.true(isEven(2), 'returns true for even int')
  t.true(isEven(2.2), 'returns true for even float')
})
