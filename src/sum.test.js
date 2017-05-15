import test from 'tape'
import sum from './sum'

test('sum', (t) => {
  t.equal(sum([ 1, 2, 3, 4 ]), 10, 'sums array of ints')
  t.equal(sum([ 1.1, 2.2, 3.3, 4.4 ]), 11, 'sums array of floats')
  t.end()
})
