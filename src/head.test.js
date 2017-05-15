import test from 'tape'
import head from './head'

test('head', (t) => {
  t.equal(head([ 1, 2, 3 ]), 1, 'returns x')
  t.end()
})
