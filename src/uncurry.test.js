import test from 'tape'
import uncurry from './uncurry'

test('uncurry', (t) => {
  const ac = (a) => (b) => a + b
  t.equal(uncurry(ac)(1, 2), 3, 'works')
  t.end()
})
