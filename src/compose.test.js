import test from 'tape'
import compose from './compose'

test('compose', (t) => {
  const addOne = (a) => a + 1
  const timesTwo = (a) => a * 2
  t.equal(compose(addOne, timesTwo)(2), 5, 'works')
  t.end()
})
