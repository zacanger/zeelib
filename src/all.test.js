import test from 'tape'
import all from './all'

test('all', (t) => {
  const lessThanThree = (a) => a < 3
  t.true(all(lessThanThree, [ 1, 2 ], 'works'))
  t.false(all(lessThanThree)([ 1, 2, 3 ]), 'works curried')
  t.end()
})
