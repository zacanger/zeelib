import test from 'tape'
import cadr from './cadr'

test('cadr', (t) => {
  t.equal(cadr([ 1, 2, 3 ]), 2, 'works')
  t.end()
})
