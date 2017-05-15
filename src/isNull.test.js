import test from 'tape'
import isNull from './isNull'

test('isNull', (t) => {
  t.false(isNull(0), 'returns false for 0')
  t.true(isNull(null), 'returns true for null')
  t.end()
})
