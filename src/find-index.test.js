import test from 'tape'
import findIndex from './find-index'

test('findIndex', (t) => {
  t.equal(findIndex(1, [ 3, 2, 1 ]), 2, 'returns index of thing')
  t.equal(findIndex(1, []), -1, 'returns -1 otherwise')
  t.end()
})
