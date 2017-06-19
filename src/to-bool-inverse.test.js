import test from 'tape'
import toBoolInverse from './to-bool-inverse'

test('toBoolInverse', (t) => {
  t.equal(toBoolInverse(1), false, 'works')
  t.end()
})
