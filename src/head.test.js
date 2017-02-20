import test from 'tape'
import head from './head'

test('head', (t) => {
  t.plan(1)
  t.equal(head([ 1, 2, 3 ]), 1, 'returns x')
})
