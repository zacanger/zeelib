import test from 'tape'
import nth from './nth'

test('nth', (t) => {
  t.equal(nth(1, [ 1, 2 ]), 2, 'works')
  t.end()
})
