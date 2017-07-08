import test from 'tape'
import reduce from './reduce'

test('reduce', (t) => {
  t.equal(reduce((a, b) => a + b, 0, [ 1, 2, 3, 4 ]), 10, 'works with all args')
  t.equal(reduce((a, b) => a + b)(0)([ 1, 2, 3, 4 ]), 10, 'works curried')
  t.end()
})
