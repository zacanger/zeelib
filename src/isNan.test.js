import test from 'tape'
import isNan from './isNan'

test('isNan', (t) => {
  t.false(isNan(1), 'returns false for not NaN')
  t.true(isNan(NaN), 'returns true for NaN')
  t.end()
})
