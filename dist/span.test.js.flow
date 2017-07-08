import test from 'tape'
import span from './span'

test('span', (t) => {
  const lessThanThree = (a) => a < 3
  t.deepEqual(span(lessThanThree, [ 1, 2, 3, 4 ]), [ [ 1, 2 ], [ 3, 4 ] ], 'works')
  t.end()
})
