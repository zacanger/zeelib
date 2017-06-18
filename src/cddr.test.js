import test from 'tape'
import cddr from './cddr'

test('cddr', (t) => {
  t.deepEqual(cddr([ 1, 2, 3, 4 ]), [ 3, 4 ], 'works')
  t.end()
})
