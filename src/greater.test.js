import test from 'tape'
import greater from './greater'

test('greater', (t) => {
  t.equal(greater(1, 2), 2, 'works')
  t.end()
})
