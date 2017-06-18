import test from 'tape'
import apply from './apply'

test('apply', (t) => {
  const lessthanThree = (a) => a < 3
  t.true(apply(lessthanThree, 1), 'works')
  t.end()
})
