import test from 'tape'
import minimum from './minimum'

test('minimum', (t) => {
  t.plan(1)
  t.equal(minimum([1, 2, 3, 4, 5]), 1, 'returns smallest')
})
