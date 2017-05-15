import test from 'tape'
import isFloat from './isFloat'

test('isFloat', (t) => {
  t.true(isFloat(2.2), 'returns true for float')
  t.false(isFloat(2), 'returns false for int')
  t.true(isFloat((() => 2.2)()), 'returns true for fn that returned float')
  t.end()
})
