import test from 'tape'
import lte from './lte'

test('lte', (t) => {
  t.false(lte(2, 1), 'returns false for 2 and 1')
  t.true(lte(1.1, 1.9), 'returns true for 1.1 and 1.9')
  t.true(lte(1, 1), 'returns true for 1 and 1')
  t.end()
})
