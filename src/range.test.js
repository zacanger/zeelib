import test from 'tape'
import range from './range'

test('range', (t) => {
  t.plan(3)
  t.deepEqual(range(0, 10), [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'generates arr')
  t.deepEqual(range(0, 10, 2), [ 0, 2, 4, 6, 8, 10 ], 'generates arr with skip')
  t.deepEqual(range('a', 'D'), [ 'A', 'B', 'C', 'D' ], 'generates arr of char')
})
